import express from "express";
import getUsers from "../controllers/user/getUsers.js";
import createUser from "../controllers/user/createUser.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/create", createUser);

export default userRouter;
