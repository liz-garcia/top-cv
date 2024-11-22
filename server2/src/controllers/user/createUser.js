import User, { validateUser } from "../../models/User.js";
import validationErrorMessage from "../../utils/validationErrorMessage.js";
import { logError } from "../../utils/logging.js";

// TODO Remember - All files related to CreateUser in client and server require extra work. This is just a basic setup.
const createUser = async (req, res) => {
  try {
    const { user } = req.body;

    if (typeof user !== "object") {
      res.status(400).json({
        success: false,
        msg: `You need to provide a 'user' object. Received: ${JSON.stringify(
          user
        )}`,
      });

      return;
    }

    const errorList = validateUser(user);

    if (errorList.length > 0) {
      res
        .status(400)
        .json({ success: false, msg: validationErrorMessage(errorList) });
    } else {
      const newUser = await User.create(user);

      res.status(201).json({ success: true, user: newUser });
    }
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to create user, try again later" });
  }
};

export default createUser;
