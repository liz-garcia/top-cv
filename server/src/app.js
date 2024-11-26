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
 * We only use our server to host our client code on heroku.
 * Route /api is added as a reference route to access our server.
 * If extra routes are needed, use /api/ at the start of every route!
 */

app.get("/api", (req, res) => {
  res.send(
    "Hello from server! We mostly use our server to host our client code on heroku."
  );
});

export default app;
