import dotenv from "dotenv";
import { URL } from "url";
import express from "express";
import app from "./app.js";

dotenv.config();

// The environment should set the port
const port = process.env.PORT;

if (port == null) {
  // If this fails, make sure you have created the `.env` files in the right place with the PORT set
  console.error(
    new Error("Cannot find a PORT number, did you create the .env files?")
  );
  process.exit(1); // Exit the process if PORT is not defined
}

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// * Host our client code for Heroku
/**
 * We only want to host our client code when in production mode as we then want to use the production build that is built in the dist folder.
 * When not in production, don't host the files, but the development version of the app can connect to the backend itself.
 */

// Serve static files and handle client-side routing in production mode
if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(new URL("../../client/dist", import.meta.url).pathname)
  );
  // Redirect * requests to give the client data
  app.get("*", (req, res) =>
    res.sendFile(
      new URL("../../client/dist/index.html", import.meta.url).pathname
    )
  );
}

app.listen(port, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
  } else {
    console.log(`Server started on port http://localhost:${port}/`);
  }
});
