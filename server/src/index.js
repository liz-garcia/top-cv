import dotenv from "dotenv";
import express from "express";
import app from "./app.js";
import URL from "url";

const environment = process.env.NODE_ENV;
dotenv.config({ path: `.env.${environment}` });

const port = process.env.PORT;

if (port == null) {
  // If this fails, make sure you have created the `.env` files in the right place with the PORT set
  console.error(
    new Error("Cannot find a PORT number, did you create the .env files?")
  );
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/****** Host our client code for Heroku *****/
/**
 * We only want to host our client code when in production mode as we then want to use the production build that is built in the dist folder.
 * When not in production, don't host the files, but the development version of the app can connect to the backend itself.
 */
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
    console.log(
      `Server running in ${environment} mode on port ${port} at http://localhost:${port}/`
    );
  }
});
