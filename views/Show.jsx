const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};
const color = {
  color: 'white',
}

class Show extends React.Component {
  render() {
    // Get the Pokémon data from props
    const { pokemonData } = this.props;

    // Add '.jpg' to the end of the image URL
    const imageUrl = pokemonData.img + '.jpg';

    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{cap(pokemonData.name)}</h2>
        <img src={imageUrl} alt={pokemonData.name} />
        <br />
        <br />
        <a style={color} href="/pokemon">Back</a>
      </div>
    );
  }
}

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = Show;