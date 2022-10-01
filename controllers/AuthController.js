import jwt from "jsonwebtoken";
import {
  INCORRECT_PASSWORD,
  SUCCESSFULLY_LOGED,
  SUCCESSFULLY_REGISTERED,
} from "../const/Messages.js";
import config from "../config.json" assert { type: "json" };
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  hexValidation,
} from "../validations/AuthValidation.js";

const {
  tokens: { ACCESS_TOKEN },
} = config;

const register = async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [user] = await UserModel.find({ email });

    if (!user) return res.sendStatus(403);
    if (!(await bcrypt.compare(password, user.password)))
      return res.json({ message: INCORRECT_PASSWORD });

    res.json({
      userId: user.id,
      message: SUCCESSFULLY_LOGED,
    });
  } catch (err) {
    console.log(err);
  }
};

// Validations.

const controlEmailValidation = (email) => {
  return email.match(emailValidation);
};

const controlPasswordValidation = (password) => {
  return password.match(passwordValidation);
};

const controlUserNameValidation = (name) => {
  return name.match(nameValidation);
};

const controlHexValidation = (hexId) => {
  return hexId.match(hexValidation);
};

export default {
  register,
  login,
  controlEmailValidation,
  controlEmailValidation,
  controlHexValidation,
  controlPasswordValidation,
  controlUserNameValidation,
};
