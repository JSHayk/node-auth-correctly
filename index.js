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

// Destructuring config file for access app info.
const {
  clusters: {
    users: { url },
  },
} = config;
const port = process.env.PROJECT_PORT || 3000;

connectMongo(url);
app.listen(port, () => {
  console.log(`Server has been listened on port ${port}`);
});
