import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
export const connectToMongo = async () => {
  if (MONGODB_URI) {
    try {
      await mongoose.connect(MONGODB_URI);
    } catch (err) {
      
    }
  } else {
    
  }
};