// node_modules imports.
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// My imports.
import config from "../config/config.json" assert { type: "json" };
import {
  INCORRECT_PASSWORD,
  SUCCESSFULLY_LOGED,
  SUCCESSFULLY_REGISTERED,
} from "../const/Messages.js";
import userModel from "../db/models/user.model.js";

const {
  tokens: { ACCESS_TOKEN },
} = config;

const register = async (req, res) => {
  try {
    const { email, password, username, location } = req.body;
    const accessToken = jwt.sign({ email, password }, ACCESS_TOKEN);
    const user = new userModel({
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
    const [user] = await userModel.find({ email });

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

export default {
  register,
  login,
};
