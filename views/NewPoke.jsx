const React = require('react');

class NewPoke extends React.Component {
  render() {
    return (
      <div>
        <h1>Add a new Pokemon!</h1>
        <form action="/pokemon/NewPoke/" method='POST'> 
          Name: <input type="text" name="name" />
          <br />
          Image URL: <input type="text" name="img" />
          <br />
          Is this Pokemon Evolved? <input type="checkbox" name="evolved" />
          <br />
          <input type="submit" value="Add Pokemon" />
        </form>
      </div>
    )
  }
}

module.exports = NewPoke;