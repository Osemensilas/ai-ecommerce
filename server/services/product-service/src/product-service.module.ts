import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductService } from './product-service.service';
import { ProductController } from './product-service.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService], // 👈 optional but useful if other modules will use it
})
export class ProductServiceModule {} // ✅ renamed to match your import in app.module.ts
