import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

// The environment should set the port
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
