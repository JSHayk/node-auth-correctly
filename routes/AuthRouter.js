import express from "express";
import UserMiddleWare from "../middlewares/AuthMiddleWare.js";
import AuthController from "../controllers/AuthController.js";

const router = express();

router.post(
  "/sign-up",
  UserMiddleWare.checkAuthenticated,
  UserMiddleWare.checkValidations,
  AuthController.register
);

router.post("/sign-in", UserMiddleWare.checkValidations, AuthController.login);

export default router;
