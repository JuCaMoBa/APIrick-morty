import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  render() {
    return (
      <>
        {this.props.characters?.data?.results.map((character, index) => (
          <Card key={index} character={character} index={index} />
        ))}
      </>
    );
  }
}

export default CardList;
