import React, { Component } from "react";

class Card extends Component {
  render() {
    return this.props.isVisible ? (
      <div>
        <img
          src={this.props.singleCharacter?.image}
          alt={this.props.singleCharacter?.name}
        />
        <h3>{this.props.singleCharacter?.name}</h3>
        <p>Last Location</p>
        <h5> {this.props.singleCharacter?.location?.name}</h5>
      </div>
    ) : (
      <div
        onClick={() => this.props.handleClick(this.props.character?.id)}
        key={this.props.index}
      >
        <img
          src={this.props.character?.image}
          alt={this.props.character?.name}
        />
        <h3>{this.props.character?.name}</h3>
        <p>Last Location</p>
        <h5>{this.props.character?.location?.name}</h5>
      </div>
    );
  }
}

export default Card;
