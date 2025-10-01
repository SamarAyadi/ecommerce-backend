import { model, Schema } from "mongoose";

const brandSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Brand name is required"],
      trim: true,
      minlength: [2, "Too short brand name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    logo: {
      type: String, // URL to logo image
    },
  },
  {
    timestamps: true,
  }
);

export const brandModel = model("brand", brandSchema);
