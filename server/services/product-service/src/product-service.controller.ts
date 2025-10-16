import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product-service.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // ➕ Create a new product (with multiple file uploads)
  @Post()
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: diskStorage({
        destination: './uploads/products',
        filename: (req, file, callback) => {
          const uniqueName =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, uniqueName + extname(file.originalname));
        },
      }),
    }),
  )
  async create(@UploadedFiles() files: Express.Multer.File[], @Body() body: any) {
    const imagePaths = files?.map((f) => f.filename) || [];

    // Convert nested JSON strings back into objects
    for (const key in body) {
      if (typeof body[key] === 'string' && body[key].startsWith('{')) {
        try {
          body[key] = JSON.parse(body[key]);
        } catch {}
      }
      if (typeof body[key] === 'string' && body[key].startsWith('[')) {
        try {
          body[key] = JSON.parse(body[key]);
        } catch {}
      }
    }

    const productData = {
      ...body,
      images: imagePaths,
    };

    return this.productService.create(productData);
  }

  // 📄 Get all products
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
