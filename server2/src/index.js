import { logInfo, logError } from "../src/utils/logging.js";

import dotenv from "dotenv";
dotenv.config();

import { URL } from "url";
import express from "express";
import app from "./app.js";
import connectDB from "./db/connectDB.js";

// * *************** The environment should set the port ***************
const port = process.env.PORT || 3000;
if (port == null) {
  // Make sure `.env` files are created in the right place with the PORT set.
  logError(new Error("PORT number not found. Please setup .env files."));
  process.exit(1); // Exit the process if PORT is not defined
}

// * *************** Start Server and Connect to Database ***************
const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, (err) => {
      if (err) {
        logError(`Failed to start server: ${err}`);
        process.exit(1); // Exit the process if the server fails to start
      } else {
        logInfo(`Server started on port http://localhost:${port}/api/`);
      }
    });
  } catch (error) {
    logError(`Error connecting to the database: ${error}`);
    process.exit(1); // Exit the process if error is encountered
  }
};

// * *************** Host our client code for Heroku ***************
/* We only want to host our client code when in production mode as we then want to use the production build that is built in the dist folder. When not in production, don't host the files, but the development version of the app can connect to the backend itself. */
// * Serve static files and handle client-side routing in production mode
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

// * Start the server
startServer();
