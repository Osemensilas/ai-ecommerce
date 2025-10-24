import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product-service.controller';
import { ProductService } from './product-service.service';
import { Product, ProductSchema } from './schemas/product.schema';
import { StorageModule } from '../storage/storage.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    StorageModule, 
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductServiceModule {}
