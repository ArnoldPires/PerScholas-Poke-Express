// Setup the server
// require express
const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const pokemon = require("./models/pokemon");

// Specfiy the template engine: jsx
app.set("view engine", "jsx")

// Setup the jsx engine, as the template engine
app.engine("jsx", jsxEngine())

// Setup a variable to port 3000
app.listen(3000, () => {
  console.log("Listening to port 3000")
})

// A route to the root file site
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
})

// Route to the Pokemon names and images
app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

