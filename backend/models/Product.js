import mongoose from "mongoose";
import shortid from "shortid";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number, required: false },

    groupId: { type: String, required: true },
    categoryId: { type: String, required: true },

    image: { type: String },

    sku: {
      type: String,
      unique: true,
      default: () => `SKU-${shortid.generate()}`.toUpperCase(),
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },
    discount: { type: Number, required: false },
    views: { type: Number, required: false },
    ratingValue: { type: Number, default: 0 },
  ratingCount: { type: Number, default: 0 },
  averageRating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
