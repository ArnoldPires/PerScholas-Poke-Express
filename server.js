const express = require("express");
const app = express();
//const jsxEngine = require("jsx-view-engine");

app.listen(3000, () => {
  console.log("Listening to port 3000")
})

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
})