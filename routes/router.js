// node_modules.
import express from "express";
// My imports.
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";

const router = express();

router.use(authRouter);
router.use(userRouter);

export default router;
