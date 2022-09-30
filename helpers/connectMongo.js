import mongoose from "mongoose";

async function connectMongo(url) {
  try {
    await mongoose.connect(url);
    console.log("Mongo is connected");
  } catch (err) {
    console.log(err);
  }
}

export default connectMongo;
