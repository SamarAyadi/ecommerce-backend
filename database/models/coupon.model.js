import { model, Schema } from "mongoose";

const couponSchema = new Schema(
  {
    code: {
      type: String,
      required: [true, "Coupon code is required"],
      trim: true,
    },
     expires: {
      type: Date, //  better than just a boolean
      required: [true, "Expiration date is required"],
    },
    discount: {
      type: Number,
      required: [true, "Discount value is required"],
      min: 0
    }
   
   
  },
  {
    timestamps: true,
  }
);

export default model("Coupon", couponSchema);
