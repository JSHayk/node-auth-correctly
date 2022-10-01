import {
  AUTHENTICATED,
  INCORRECT_EMAIL,
  REQUIER_PASSSWORD,
} from "../const/Messages.js";
import AuthController from "../controllers/AuthController.js";
import UserModel from "../models/UserModel.js";

const checkValidations = (req, res, next) => {
  const { email, password } = req.body;
  const emailCondition = !AuthController.controlEmailValidation(email);
  if (emailCondition) return res.json({ message: INCORRECT_EMAIL });
  const passwordCondition = !AuthController.controlPasswordValidation(password);
  if (passwordCondition) return res.json({ message: REQUIER_PASSSWORD });
  next();
};

const checkAuthenticated = async (req, res, next) => {
  const { email } = req.body;
  const [checkUser] = await UserModel.find({ email });

  if (checkUser) return res.json({ message: AUTHENTICATED });
  next();
};

export default {
  checkValidations,
  checkAuthenticated,
};
