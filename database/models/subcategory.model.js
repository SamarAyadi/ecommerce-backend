import { model, Schema } from "mongoose";

const subCategorySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "SubCategory name is required"],
      trim: true,
      minlength: [2, "Too short subCategory name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
      type: Schema.Types.ObjectId, 
      ref: "Category", //  Reference model should match your Category model name
      required: [true, "Category is required"],
    },
  },
  { timestamps: true } //  optional: adds createdAt & updatedAt
);

export default model("SubCategory", subCategorySchema);
