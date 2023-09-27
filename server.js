// Setup the server
// require express
const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const PORT = process.env.PORT || 8000;
dotenv.config();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Connects the Schema which will be communicating with MongoDB
const Pokemon = require("./models/pokemon");

// Connecting to MongoDB
// Uses the .env file with key
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use((req, res, next) => {
  console.log("Running");
  next();
});

// Enables the ablity to delete pokemon
app.use(methodOverride("_method"));

// Specfiy the template engine: jsx
app.set("view engine", "jsx")
// Setup the jsx engine, as the template engine
app.engine("jsx", jsxEngine())

// Tells express to the current middleware
app.use(express.urlencoded({ extended: false }));

// Home page
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
})

/*

Pokemon Routes

*/

// List of all the Pokemon
app.get("/pokemon", async (req, res) => {
  try {
    const pokemon = await Pokemon.find();
    res.render("pokemon/Index", { pokemon });
  } catch (error) {
    console.error(error);
  }
});

// Display the form for adding a new Pokemon
app.get("/pokemon/newPoke", (req, res) => {
  res.render("pokemon/NewPoke");
});

// Create a new Pokemon
// Must include the name, image, and if the pokemon is evolved or not
app.post("/pokemon", async (req, res) => {
  try {
    let evolved = false;
    if (req.body.evolved === "on") {
      evolved = true;
    }
    const newPoke = new Pokemon({
      name: req.body.name,
      img: req.body.img,
      evolved: evolved,
    });
    // Once you've created a new pokemon, it gets added back to the list with the others
    await newPoke.save();
    res.redirect("/pokemon");
  } catch (error) {
    console.error(error);
  }
});

// Edit a pokemon
app.get("/pokemon/:id/edit", async (req, res) => {
  try {
    const editPokemon = await Pokemon.findById(req.params.id);
    res.render("pokemon/Edit", {
      pokemon: editPokemon,
    });
  } catch (error) {
    console.error(error);
    res.send({ msg: error.message });
  }
});

// Update Pokemon
app.put("/pokemon/:id", async (req, res) => {
  try {
    if (req.body.evolved === "on") {
      req.body.evolved = true;
    } else {
      req.body.evolved = false;
    }
    await Pokemon.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/pokemon");
  } catch (error) {
    console.error(error);
  }
});

// Delete a Pokemon
app.delete("/pokemon/:id", async (req, res) => {
  try {
    await Pokemon.findByIdAndDelete(req.params.id);
    res.redirect("/pokemon");
  } catch (error) {
    console.error(error);
  }
});

// Displays the pokemon once you click on one of them
// New route for pokemon/:id
app.get("/pokemon/:id", async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    res.render("pokemon/Show", { pokemonData: pokemon });
  } catch (error) {
    console.error(error);
  }
});

// Lets you know if its connected to the mongo servers
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Setups the local host to 3000: http://localhost:3000/pokemon
app.listen(3001, () => {
  console.log("Listening to port 3000")
});