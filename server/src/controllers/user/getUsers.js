import User from "../../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, result: users });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to get users, try again later." });
  }
};
