// Setup the server
// require express
const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const pokemon = require("./models/pokemon");

// Middleware
app.use((req, res, next) => {
  next();
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

// Specfiy the template engine: jsx
app.set("view engine", "jsx")
// Setup the jsx engine, as the template engine
app.engine("jsx", jsxEngine())

// A route to the root file site
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
})

// Route to the Pokemon names and images
app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon });
});

app.get("/pokemon/NewPoke", (req, res) => {
  res.render("NewPoke");
});

app.post("/pokemon/NewPoke/", (req, res) => {
  const newPoke = {
    name: req.body.name,
    img: req.body.img,
    evolved: req.body.evolved === "on",
  }
  pokemon.push(newPoke)
  res.redirect("/pokemon");
});

// New route for pokemon/:id
app.get("/pokemon/:id", (req, res) => {
  const pokemonId = req.params.id;
  // Get the Pokémon data based on the id
  const pokemonData = pokemon[pokemonId];
  res.render("Show", { pokemonData });
});

// Setup a variable to port 3000
app.listen(3000, () => {
  console.log("Listening to port 3000")
});