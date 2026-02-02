import mongoose from "mongoose";

const usageSchema = {
  jan: Boolean,
  feb: Boolean,
  mar: Boolean,
  apr: Boolean,
  may: Boolean,
  jun: Boolean,
  jul: Boolean,
  aug: Boolean,
  sep: Boolean,
  oct: Boolean,
  nov: Boolean,
  dec: Boolean,
};

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    monthlyCost: {
      type: Number,
      required: true,
    },
    usage: {
      type: usageSchema,
      default: {
        jan: false,
        feb: false,
        mar: false,
        apr: false,
        may: false,
        jun: false,
        jul: false,
        aug: false,
        sep: false,
        oct: false,
        nov: false,
        dec: false,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Subscription", subscriptionSchema);
