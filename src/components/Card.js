import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div key={this.props.index}>
        <img src={this.props.character.image} alt={this.props.character.name} />
        <h3>{this.props.character.name}</h3>
        <p>Last Location</p>
        <h5>{this.props.character.location.name}</h5>
      </div>
    );
  }
}

export default Card;
