import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, unique: true, trim: true })
  slug: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  brand: string;

  @Prop()
  description: string;

  @Prop({
    type: {
      current: { type: Number, required: true },
      old: { type: Number },
      currency: { type: String, default: 'NGN' },
      discount_percentage: { type: Number, default: 0 },
    },
  })
  price: Record<string, any>;

  @Prop({ type: [String], default: [] })
  images: string[];

  @Prop({
    type: {
      display: String,
      processor: String,
      ram: String,
      storage: String,
      camera: String,
      battery: String,
      os: String,
    },
  })
  specifications: Record<string, any>;

  @Prop({
    type: [
      {
        color: String,
        storage: String,
      },
    ],
    default: [],
  })
  variants: Record<string, any>[];

  @Prop({
    type: {
      available: { type: Boolean, default: true },
      quantity: { type: Number, default: 0 },
    },
  })
  stock: Record<string, any>;

  @Prop({
    type: {
      id: String,
      name: String,
      rating: Number,
    },
  })
  seller: Record<string, any>;

  @Prop({
    type: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
  })
  ratings: Record<string, any>;

  @Prop({
    type: {
      delivery_time: String,
      shipping_fee: Number,
      return_policy: String,
    },
  })
  shipping: Record<string, any>;

  @Prop({ type: [String], default: [] })
  tags: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
