import express from "express";
import cors from "cors";

// * Import routers
import serverRouter from "./routes/server.js";
import userRouter from "./routes/user.js";

// * Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json());

// TODO Consider fixing cors asap
// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

// * Attach routes
// We use /api/ at the start of every route! As we also host our client code on heroku, we want to separate the API endpoints.
app.use("/api/", serverRouter);
app.use("/api/user", userRouter);

// * Initial server setup - data example
import dataRouter from "./routes/data.js";
app.use("/api/data", dataRouter);
// *

export default app;
