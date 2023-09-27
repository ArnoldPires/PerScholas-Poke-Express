const React = require('react');

class Edit extends React.Component {
  render() {
    return (
      <form action={`/pokemon/${this.props.pokemon.id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={this.props.pokemon.name} />
        <br />
        Image: <input type="text" name="img" defaultValue={this.props.pokemon.img} />
        <br />
        Evolved?:
        <input
          type="checkbox"
          name="evolved"
          defaultChecked={this.props.pokemon.evolved ? true : false} />
        <br />
        <input type="submit" value="Update Pokemon" />
      </form>
    );
  }
}

module.exports = Edit;
