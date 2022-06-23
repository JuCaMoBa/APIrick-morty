import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

class SingleCharacter extends Component {
  constructor() {
    super();
    this.state = {
      singleCharacters: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchDataSingleCharacters(id);
  }

  fetchDataSingleCharacters = async (id) => {
    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      this.setState({ singleCharacters: response });
    } catch (error) {
      new Error(error);
    }
  };

  render() {
    const { singleCharacters } = this.state;
    console.log("Hola Mundo");
    return (
      <section className="container-singleCharacter">
        <div>
          <img
            src={singleCharacters?.data?.image}
            alt={singleCharacters?.data?.name}
          />
          <h3>{singleCharacters?.data?.name}</h3>
          <p>Last Location</p>
          <h5>{singleCharacters?.data?.location?.name}</h5>
        </div>
      </section>
    );
  }
}

export default withRouter(SingleCharacter);
