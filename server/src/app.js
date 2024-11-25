import express from "express";
import cors from "cors";

// Create an express server
const app = express();

// Tell express to use the json middleware
app.use(express.json());
// Allow everyone to access our API. In a real application, we would need to restrict this!
app.use(cors());

/**
 * We do not attach any routes.
 * We only host our client code on heroku.
 */

export default app;
