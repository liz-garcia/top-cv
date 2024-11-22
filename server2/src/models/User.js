import mongoose from "mongoose";
import validateAllowedFields from "../utils/validateAllowedFields.js";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model("users", userSchema);

export const validateUser = (userObject) => {
  const errorList = [];
  const allowedKeys = ["name", "lastName", "password", "email"];

  const validatedKeysMessage = validateAllowedFields(userObject, allowedKeys);

  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (userObject.name == null) {
    errorList.push("name is a required field");
  }

  if (userObject.lastName == null) {
    errorList.push("lastName is a required field");
  }

  if (userObject.password == null) {
    errorList.push("password is a required field");
  }

  if (userObject.email == null) {
    errorList.push("email is a required field");
  }

  return errorList;
};

export default User;
