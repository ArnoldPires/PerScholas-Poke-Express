const React = require('react');

class NewPoke extends React.Component {
  render() {
    return (
      <div>
        <h1>Add a new Pokemon!</h1>
        <form action="/pokemon" method='POST'>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <br />

          <label htmlFor="img">Image URL:</label>
          <input type="text" name="img" id="img" />
          <br />

          <label htmlFor="evolved">Is this Pokemon Evolved?</label>
          <input type="checkbox" name="evolved" id="evolved" />
          <br />

          <input type="submit" value="Add Pokemon" />
        </form>
      </div>
    )
  }
}

module.exports = NewPoke;