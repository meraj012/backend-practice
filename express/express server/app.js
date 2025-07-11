const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Home page");
});
app.get("/about", (req, res) => {
  res.send("This is About page");
});
app.listen(PORT, () => {
  console.log("server is runnig on port: ", PORT);
});
