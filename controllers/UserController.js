import { NOT_FOUND_ACCOUNT } from "../const/Messages.js";
import UserModel from "../models/UserModel.js";
import AuthController from "./AuthController.js";

const getUser = async (req, res) => {
  const id = req.params.id;
  const condition =
    !AuthController.controlHexValidation(id) || id.length !== 24;
  if (condition) return res.sendStatus(404);
  const user = await UserModel.findById(id);
  if (!user) return res.json({ message: NOT_FOUND_ACCOUNT });
  res.json(user);
};

export default {
  getUser,
};
