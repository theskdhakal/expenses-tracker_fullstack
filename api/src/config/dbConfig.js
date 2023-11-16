import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const MONGO_CLIENT = "mongodb://127.0.0.1/expenses_tracker";
    const conn = mongoose.connect(MONGO_CLIENT);

    if (conn) {
      console.log("MongoDB connected");
    }
  } catch (error) {
    console.log(error);
  }
};
