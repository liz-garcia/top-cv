import dotenv from "dotenv";
import { URL } from "url";
import express from "express";
import app from "./app.js";
import connectDB from "./database/connectDB.js";

dotenv.config();

// * The environment should set the port
const port = process.env.PORT;

if (port == null) {
  // If this fails, make sure you have created the `.env` files in the right place with the PORT set
  console.error(
    new Error(
      "Cannot find a PORT number. Please add an .env file with the PORT defined."
    )
  );
  process.exit(1); // Exit the process if PORT is not defined
}

// * Host our client code for Heroku
// We only want to host our client code when in production mode as we then want to use the production build that is built in the dist folder. When not in production, don't host the files, but the development version of the app can connect to the backend itself.
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

// * Start Server and Connect to Database
const startServer = async () => {
  try {
    // TODO Create Database Connection
    await connectDB();
    app.listen(port, (err) => {
      if (err) {
        console.error(`\n\u001b[1;31mFailed to start server: ${err}\u001b[0m`);
      } else {
        console.log(
          `\n\u001b[1mServer\u001b[22m started on port \n\u001b[36mhttp://localhost:\u001b[1m${port}\u001b[22m/api/\u001b[0m`
        );
      }
    });
  } catch (error) {
    console.error(error);
  }
};

// * Start the server
startServer();
