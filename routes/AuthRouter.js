import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config.json" assert { type: "json" };
import UserModel from "../models/UserModel.js";
import {
  INCORRECT_PASSWORD,
  SUCCESSFULLY_LOGED,
  SUCCESSFULLY_REGISTERED,
} from "../const/Messages.js";
import {
  checkAuthenticated,
  checkValidations,
} from "../middlewares/UserMiddleWare.js";

const AuthRouter = express();
const {
  tokens: { ACCESS_TOKEN },
} = config;

const postSignUp = async (req, res) => {
  const { email, password, username, location } = req.body;
  const accessToken = jwt.sign({ email, password }, ACCESS_TOKEN);
  const user = new UserModel({
    email,
    username,
    password: await bcrypt.hash(password, 10),
    location,
    token: accessToken,
  });

  user.save();
  res.json({ message: SUCCESSFULLY_REGISTERED });
};

AuthRouter.post("/sign-up", checkAuthenticated, checkValidations, postSignUp);

const postSignIn = async (req, res) => {
  const { email, password } = req.body;
  const [user] = await UserModel.find({ email });

  if (!user) return res.sendStatus(403);
  if (!(await bcrypt.compare(password, user.password)))
    return res.json({ message: INCORRECT_PASSWORD });

  res.json({
    userId: user.id,
    message: SUCCESSFULLY_LOGED,
  });
};

AuthRouter.post("/sign-in", checkValidations, postSignIn);

export default AuthRouter;
