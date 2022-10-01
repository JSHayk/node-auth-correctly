// node_modules.
import express from "express";
// My imports.
import auth from "../middlewares/auth.js";
import authController from "../controllers/auth.controller.js";

const router = express();

router.post(
  "/sign-up",
  auth.checkAuthenticated,
  auth.checkValidations,
  authController.register
);

router.post("/sign-in", auth.checkValidations, authController.login);

export default router;
