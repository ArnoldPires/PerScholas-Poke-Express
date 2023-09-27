// Connect Mongoose
const mongoose = require('mongoose');

// Schema for MongoDB
const pokemonSchema = new mongoose.Schema({
	name: { type: String, required: true },
	img: { type: String, required: true },
	evolved: Boolean
});

// Model using the schema
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;

// const Pokemon = [
//   {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"},
// 	{name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg"},
// 	{name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg"},
// 	{name: "charmander", img: "http://img.pokemondb.net/artwork/charmander.jpg"},
// 	{name: "charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg"},
// 	{name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg"},
// 	{name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg"}
// ];

// module.exports = Pokemon;