import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    unique: [true, "name is required"],
    required: true,
    trim: true,
    minlength: [2, "too short category name"],
  },
  slug: {
    type: String,
    unique: [true, "name is required"],
    lowercase: true,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const categoryModel = model("category", categorySchema);
