// * Server home
import express from "express";
import getServer from "../controllers/server.js";

const serverRouter = express.Router();

serverRouter.get("/", getServer);

export default serverRouter;
