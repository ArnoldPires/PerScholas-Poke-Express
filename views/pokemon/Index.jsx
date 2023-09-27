const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

const color = {
  color: 'white',
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    console.log(pokemon);
    return (
      <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <nav>
          <a href="/pokemon/newPoke">Add a new Pokemon!</a>
        </nav>
        <ul>
          {pokemon.map((poke) => (
            <li key={poke._id}>
              <a style={color} href={`/pokemon/${poke._id}`}>{cap(poke.name)}</a>
              <form action={`/pokemon/${poke._id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE" />
              </form>
              <a href={`/pokemon/${poke._id}/edit`}>Edit this Pokemon</a>
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