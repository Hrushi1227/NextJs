import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if its already connect dont connect to DB
  if (connected) {
    console.log("MongoDB is already connected ");
    return;
  }

  // Conneect MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log("error", error);
  }
};
export default connectDB;
