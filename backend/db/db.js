import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
