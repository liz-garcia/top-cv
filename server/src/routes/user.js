import express from "express";
import { getUsers } from "../controllers/user/getUsers.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);

export default userRouter;
