import express from "express";
import UserController from "../controllers/UserController.js";

const router = express();

router.get("/user/:id", UserController.getUser);

export default router;
