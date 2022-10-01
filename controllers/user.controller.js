// My imports.
import { NOT_FOUND_ACCOUNT } from "../const/Messages.js";
import userModel from "../db/models/user.model.js";
import authValidation from "../validations/auth.validation.js";

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const condition = !authValidation.isHexValidated(id) || id.length !== 24;
    if (condition) return res.sendStatus(404);
    const user = await userModel.findById(id);
    if (!user) return res.json({ message: NOT_FOUND_ACCOUNT });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};

export default {
  getUser,
};
