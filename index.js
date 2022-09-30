import dotenv from "dotenv";
dotenv.config();
import config from "./config.json" assert { type: "json" };
import express from "express";
import UserRouter from "./routes/UserRouter.js";
import connectMongo from "./helpers/connectMongo.js";
import AuthRouter from "./routes/AuthRouter.js";

const app = express();

// MiddleWares.
app.use(express.json());
app.use(UserRouter);
app.use(AuthRouter);

// Destructuring config file for access port info.
const {
  port: { name, message },
  clusters: {
    users: { url },
  },
} = config;

connectMongo(url);
app.listen(name || 3000, () => {
  console.log(message);
});
