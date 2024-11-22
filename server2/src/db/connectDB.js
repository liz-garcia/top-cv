import mongoose from "mongoose";
import { logInfo, logError } from "../utils/logging.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    logInfo("MongoDB connection successful.");
  } catch (error) {
    logError(error.message);
    process.exit(1);
  }
};

export default connectDB;
