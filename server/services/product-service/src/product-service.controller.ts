import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product-service.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ObjectStorageService } from '../storage/Storage.service';

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly objectStorageService: ObjectStorageService,
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images', 10, { storage: memoryStorage() }))
  async create(@UploadedFiles() files: Express.Multer.File[], @Body() body: any) {
    const uploadPromises = files.map((file) =>
      this.objectStorageService.uploadFile(file, 'products/'),
    );
    const imageUrls = await Promise.all(uploadPromises);

    for (const key in body) {
      if (typeof body[key] === 'string' && (body[key].startsWith('{') || body[key].startsWith('['))) {
        try {
          body[key] = JSON.parse(body[key]);
        } catch {}
      }
    }

    const productData = { ...body, images: imageUrls };
    return this.productService.create(productData);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateData: any) {
    return this.productService.update(id, updateData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }

  @Get('hello')
  getHello(): string {
    return 'Hello World!';
  }
}
