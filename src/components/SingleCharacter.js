import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

class SingleCharacter extends Component {
  constructor() {
    super();
    this.state = {
      singleCharacter: {},
    };
  }

  componentDidMount() {
    this.fetchDataSingleCharacters();
  }

  fetchDataSingleCharacters = async () => {
    let { id } = useParams();
    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      this.setState({ singleCharacter: response });
    } catch (error) {
      new Error(error);
    }
  };

  render() {
    const { singleCharacter } = this.state;

    return (
      <div>
        <img src={singleCharacter?.image} alt={singleCharacter?.name} />
        <h3>{singleCharacter?.name}</h3>
        <p>Last Location</p>
        <h5>{singleCharacter?.location?.name}</h5>
      </div>
    );
  }
}

export default SingleCharacter;
