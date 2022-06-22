import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  render() {
    return (
      <>
        {this.props.isVisible ? (
          <Card
            isVisible={this.props.isVisible}
            singleCharacter={this.props.singleCharacter.data}
          />
        ) : (
          this.props.characters?.data?.results.map((character, index) => (
            <Card
              isVisible={this.props.isVisible}
              handleClick={this.props.handleClick}
              key={index}
              character={character}
              index={index}
            />
          ))
        )}
      </>
    );
  }
}

export default CardList;
