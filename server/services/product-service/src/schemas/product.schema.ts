import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  // 🏷️ Basic Info
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: false })
  slug: string;

  // 🧩 Category Hierarchy (Jumia-style)
  @Prop({ required: true })
  category: string; // e.g. "Fashion"

  @Prop({ required: true })
  subcategory: string; // e.g. "Men's Clothing"

  @Prop({ required: true })
  typeCategory: string; // e.g. "T-Shirts"

  @Prop()
  brand?: string;

  @Prop()
  description?: string;

  // 💰 Price Info
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

  // 🖼️ Images
  @Prop({ type: [String], default: [] })
  images: string[];

  // ⚙️ General Specifications
  @Prop({
    type: [
      {
        key: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    default: [],
  })
  specifications: { key: string; value: string }[];

  // 🧾 Technical / Physical Details
  @Prop({
    type: {
      sku: {
        type: String,
        default: () =>
          'SKU-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
      },
      productLine: {
        type: String,
        default: () =>
          'PL-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
      },
      productionCountry: String,
      weight: String,
      color: String,
      material: String,
      careLabel: String,
      dimension: String,
    },
  })
  specificationDetails: {
    sku: string;
    productLine: string;
    productionCountry?: string;
    weight?: string;
    color?: string;
    material?: string;
    careLabel?: string;
    dimension?: string;
  };

  // 🧍 Variants (for size, color, or storage variations)
  @Prop({
    type: [
      {
        color: String,
        size: String,
        storage: String,
        priceAdjustment: Number,
      },
    ],
    default: [],
  })
  variants: {
    color?: string;
    size?: string;
    storage?: string;
    priceAdjustment?: number;
  }[];

  // 📦 Stock & Availability
  @Prop({
    type: {
      available: { type: Boolean, default: true },
      quantity: { type: Number, default: 0 },
    },
  })
  stock: { available: boolean; quantity: number };

  // 🏪 Seller Info
  @Prop({
    type: {
      id: String,
      name: String,
      rating: { type: Number, default: 0 },
    },
  })
  seller: { id?: string; name?: string; rating?: number };

  // ⭐ Ratings
  @Prop({
    type: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
  })
  ratings: { average: number; count: number };

  // 🚚 Shipping Info
  @Prop({
    type: {
      delivery_time: String,
      shipping_fee: String,
      return_policy: String,
    },
  })
  shipping: {
    delivery_time?: string;
    shipping_fee?: string;
    return_policy?: string;
  };

  // 🏷️ Tags for SEO or filters
  @Prop({ type: [String], default: [] })
  tags: string[];

  // 🧩 Custom Attributes
  @Prop({
    type: Map,
    of: String,
    default: {},
  })
  customAttributes: Map<string, string>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
