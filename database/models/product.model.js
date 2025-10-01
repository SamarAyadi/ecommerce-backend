import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      unique: true, // ✅ only true, not with message
      required: [true, "Product title is required"],
      trim: true,
      minlength: [2, "Too short product title"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    price: {
      type: Number,
      default: 0,
      min: 0,
    },
    priceAfterDiscount: {
      type: Number,
      default: 0,
      min: 0,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      maxlength: [
        100,
        "Description must be less than or equal to 100 characters",
      ],
      minlength: [10, "Too short product description"],
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    sold: {
      type: Number,
      default: 0,
      min: 0,
    },
    imgCover: {
      type: String,
      required: [true, "Product cover image is required"],
    },
    images: [String],
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
    subCategories: [
      {
        type: Schema.Types.ObjectId,
        ref: "SubCategory",
      },
    ],
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: [true, "Brand is required"],
    },
    ratingAvg: {
      type: Number,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Product", productSchema);
