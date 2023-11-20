import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: true,
    },
    type: { type: String, require: true },
    title: { type: String, require: true },
    amount: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Transaction", transactionSchema);
