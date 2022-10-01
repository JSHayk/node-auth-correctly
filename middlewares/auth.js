// My imports.
import {
  AUTHENTICATED,
  INCORRECT_EMAIL,
  REQUIER_PASSSWORD,
} from "../const/Messages.js";
import userModel from "../db/models/user.model.js";
import authValidation from "../validations/auth.validation.js";

const checkValidations = (req, res, next) => {
  const { email, password } = req.body;
  const emailCondition = !authValidation.isEmailValidated(email);
  if (emailCondition) return res.json({ message: INCORRECT_EMAIL });
  const passwordCondition = !authValidation.isPasswordValidated(password);
  if (passwordCondition) return res.json({ message: REQUIER_PASSSWORD });
  next();
};

const checkAuthenticated = async (req, res, next) => {
  try {
    const { email } = req.body;
    const [checkUser] = await userModel.find({ email });

    if (checkUser) return res.json({ message: AUTHENTICATED });
    next();
  } catch (err) {
    console.log(err);
  }
};

export default {
  checkValidations,
  checkAuthenticated,
};
