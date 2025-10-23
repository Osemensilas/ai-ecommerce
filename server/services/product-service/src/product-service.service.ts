import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(productData: any): Promise<Product> {
    const createdProduct = new this.productModel(productData);
    return createdProduct.save();
  }

  // bjkhbjk

  async findAll(): Promise<Product[]> {
    return this.productModel.find().sort({ createdAt: -1 }).exec();
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async findBySlug(slug: string): Promise<Product> {
    const product = await this.productModel.findOne({ slug }).exec();
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async findByCategory(category: string, subcategory?: string): Promise<Product[]> {
    const query: any = { category };
    if (subcategory) query.subcategory = subcategory;
    return this.productModel.find(query).exec();
  }

  async update(id: string, updateData: any): Promise<Product> {
    const updated = await this.productModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    if (!updated) throw new NotFoundException('Product not found');
    return updated;
  }

  async delete(id: string): Promise<{ message: string }> {
    const result = await this.productModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Product not found');
    return { message: 'Product deleted successfully' };
  }

  async search(query: string): Promise<Product[]> {
    return this.productModel
      .find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { category: { $regex: query, $options: 'i' } },
          { subcategory: { $regex: query, $options: 'i' } },
          { brand: { $regex: query, $options: 'i' } },
          { 'specifications.value': { $regex: query, $options: 'i' } },
        ],
      })
      .exec();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
