// node_modules.
import express from "express";
// My imports.
import userController from "../controllers/user.controller.js";

const router = express();

router.get("/user/:id", userController.getUser);

export default router;
