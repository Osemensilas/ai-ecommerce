import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  _id: string;
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) slug: string;
  @Prop({ required: true }) category: string;
  @Prop({ required: true }) subcategory: string;
  @Prop({ required: true }) typeCategory: string;
  @Prop() brand?: string;
  @Prop() description?: string;

  @Prop({
    type: {
      current: { type: Number, required: true },
      old: { type: Number },
      currency: { type: String, default: 'NGN' },
      discount_percentage: { type: Number, default: 0 },
    },
  })
  price: {
    current: number;
    old?: number;
    currency: string;
    discount_percentage: number;
  };

  @Prop({ type: [String], default: [] }) images: string[];

  @Prop({
    type: [
      { key: { type: String, required: true }, value: { type: String, required: true } },
    ],
    default: [],
  })
  specifications: { key: string; value: string }[];

  @Prop({
    type: {
      sku: { type: String, default: () => 'SKU-' + Math.random().toString(36).substring(2, 10).toUpperCase() },
      productLine: { type: String, default: () => 'PL-' + Math.random().toString(36).substring(2, 10).toUpperCase() },
      productionCountry: String,
      weight: String,
      color: String,
      material: String,
      careLabel: String,
      dimension: String,
    },
  })
  specificationDetails: any;

  @Prop({ type: [{ color: String, size: String, storage: String, priceAdjustment: Number }], default: [] })
  variants: any[];

  @Prop({ type: { available: { type: Boolean, default: true }, quantity: { type: Number, default: 0 } } })
  stock: any;

  @Prop({ type: { id: String, name: String, rating: { type: Number, default: 0 } } })
  seller: any;

  @Prop({ type: { average: { type: Number, default: 0 }, count: { type: Number, default: 0 } } })
  ratings: any;

  @Prop({ type: { delivery_time: String, shipping_fee: String, return_policy: String } })
  shipping: any;

  @Prop({ type: [String], default: [] }) tags: string[];
  @Prop({ type: Map, of: String, default: {} }) customAttributes: Map<string, string>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
