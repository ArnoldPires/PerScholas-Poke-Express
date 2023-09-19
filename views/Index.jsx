const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};
const color = {
  color: 'white',
}

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemon.map((poke, index) => (
            <li key={index}>
              <a style={color} href={`/pokemon/${index}`}>{cap(poke.name)}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = Index;