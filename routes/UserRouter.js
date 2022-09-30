import express from "express";
import { NOT_FOUND_ACCOUNT } from "../const/Messages.js";
import { controlHexValidation } from "../controllers/UserController.js";
import UserModel from "../models/UserModel.js";

const UserRouter = express();

const getUser = async (req, res) => {
  const id = req.params.id;
  console.log(id, "id");
  const condition = !controlHexValidation(id) || id.length !== 24;
  if (condition) return res.sendStatus(404);
  const user = await UserModel.findById(id);
  console.log(user, "user");
  if (!user) return res.json({ message: NOT_FOUND_ACCOUNT });
  res.json(user);
};

UserRouter.get("/user/:id", getUser);

export default UserRouter;
