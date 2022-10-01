import mongoose from "mongoose";
import config from "../config/config.json" assert { type: "json" };

async function connectMongo() {
  try {
    const { db } = config;
    await mongoose.connect(db.url);
    console.log("Mongo is connected");
  } catch (err) {
    console.log(err);
  }
}

export default connectMongo;
