import { model, Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "Review text is required"],
      trim: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product", //  match Product model name
      required: [true, "Product is required"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", //  match User model name
      required: [true, "User is required"],
    },
    rate: {
      type: Number,
      enum:  [1, 2, 3, 4, 5] ,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Review", reviewSchema);
