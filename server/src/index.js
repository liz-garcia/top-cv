import app from "./app.js";
import dotenv from "dotenv";

const environment = process.env.NODE_ENV || "production";
dotenv.config({ path: `.env.${environment}` });

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
  } else {
    console.log(
      `Server running in ${environment} mode on port ${port} at http://localhost:${port}/`
    );
  }
});
