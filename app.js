import dotenv from "./config/config.js";
import express from "express";
import connectMongo from "./db/connectMongo.js";
import router from "./routes/router.js";

const app = express();

// middlewares.
app.use(express.json());
app.use(router);

// access env.
const port = process.env.PROJECT_PORT || 3000;
connectMongo();
app.listen(port, () => {
  console.log(`Server has been listened on port ${port}`);
});
