import { Schema, model } from "mongoose";

const schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    default: "Armenia",
  },
  token: {
    type: String,
    required: true,
  },
});

export default model("User", schema);
