import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <Link to={`character/${this.props.character?.id}`}>
        <div>
          <img
            src={this.props.character?.image}
            alt={this.props.character?.name}
          />
          <h3>{this.props.character?.name}</h3>
          <p>Last Location</p>
          <h5>{this.props.character?.location?.name}</h5>
        </div>
      </Link>
    );
  }
}

export default Card;
