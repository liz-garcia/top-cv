// * Disable console methods in production
if (process.env.NODE_ENV === "production") {
  // eslint-disable-next-line no-console
  console.log = function () {};
  // eslint-disable-next-line no-console
  console.warn = function () {};
  // eslint-disable-next-line no-console
  console.error = function () {};
}

import express from "express";
import cors from "cors";

import userRouter from "./routes/user.js";

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json());
// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

/****** Attach routes ******/
/**
 * We use /api/ at the start of every route!
 * As we also host our client code on heroku we want to separate the API endpoints.
 */
app.use("/api/user", userRouter);

// * Initial server setup - data example
import dataRouter from "./routes/data.js";
app.use("/api/data", dataRouter);
// *

export default app;
