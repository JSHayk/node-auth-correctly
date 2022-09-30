import User from "../../models/User.js";
import { controlHexValidation } from "../../controllers/index.js";
import { FAILURE_ACCOUNT_DELETE, NOT_FOUND_ACCOUNT, SUCCESS_ACCOUNT_DELETE } from "../../const/Messages.js";

export const deleteAccount = async (req, res) => {
    const { id } = req.params;
    if (!controlHexValidation(id) || id.length !== 24) { 
        return res.json({message: FAILURE_ACCOUNT_DELETE});
    }
    const user = await User.findById(id);
    if (user === null) return res.json({message: NOT_FOUND_ACCOUNT});
    user.deleteOne();
    res.json({message: SUCCESS_ACCOUNT_DELETE});
}