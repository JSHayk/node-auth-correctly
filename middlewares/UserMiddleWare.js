import {
  AUTHENTICATED,
  INCORRECT_EMAIL,
  REQUIER_PASSSWORD,
} from "../const/Messages.js";
import {
  controlEmailValidation,
  controlPasswordValidation,
} from "../controllers/UserController.js";
import UserModel from "../models/UserModel.js";

export const checkValidations = (req, res, next) => {
  const { email, password } = req.body;
  const emailCondition = !controlEmailValidation(email);
  if (emailCondition) return res.json({ message: INCORRECT_EMAIL });
  const passwordCondition = !controlPasswordValidation(password);
  if (passwordCondition) return res.json({ message: REQUIER_PASSSWORD });
  next();
};

export const checkAuthenticated = async (req, res, next) => {
  const { email } = req.body;
  const [checkUser] = await UserModel.find({ email });

  if (checkUser) return res.json({ message: AUTHENTICATED });
  next();
};
