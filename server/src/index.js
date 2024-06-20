import app from "./app.js";
import dotenv from "dotenv";
const environment = process.env.NODE_ENV;
dotenv.config({ path: `.env.${environment}` });

// * The environment should set the port
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `Server running in ${environment} mode on port ${port} at http://localhost:${port}/`
  );
});
