import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductServiceService } from './product-service.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductServiceController {
  constructor(private readonly productService: ProductServiceService) {}

  @Post()
  async create(@Body() body: Partial<Product>) {
    return this.productService.create(body);
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
  async update(@Param('id') id: string, @Body() body: Partial<Product>) {
    return this.productService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
