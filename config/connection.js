import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default function connectDB() {
  const uri = process.env.MONGO_URI;
  // Connect to MongoDB and handle the promise
  mongoose
    .connect(uri)
    .then(() => console.log("Successfully connected to MongoDB!"))
    .catch((err) => console.error("Connection error", err));
}
