// * Initial server setup - data example
import express from "express";
import getData from "../controllers/data.js";

const dataRouter = express.Router();

dataRouter.get("/", getData);

export default dataRouter;
