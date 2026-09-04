import mongoose from "mongoose";

export const connectDB = async (mongoUrl) => {
  await mongoose.connect(mongoUrl);
  console.log("Conectado a MongoDB");
};

