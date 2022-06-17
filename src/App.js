import React, { Component } from "react";
const axios = require("axios");

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: {},
      filterCharacter: "",
    };
  }

  componentDidMount() {
    this.fetchDataAllCharacters();
  }

  fetchDataAllCharacters = async () => {
    try {
      const response = await axios("https://rickandmortyapi.com/api/character");
      this.setState({ characters: response });
    } catch (error) {
      new Error(error);
    }
  };

  handleChange = (event) => {
    this.setState({ filterCharacter: event.target.value });
  };

  fetchDataFilterCharacter = async () => {
    const { filterCharacter } = this.state;
    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/?name=${filterCharacter}`
      );
      this.setState({ characters: response });
    } catch (error) {
      new Error(error);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchDataFilterCharacter();
  };

  render() {
    const { characters } = this.state;
    return (
      <>
        <section>
          <h1>characters</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="find a character"
            />
            <button type="submit">Search</button>
          </form>
        </section>
        <section>
          {characters?.data?.results.map((character, index) => (
            <div key={index}>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <p>Last Location</p>
              <h5>{character.location.name}</h5>
            </div>
          ))}
        </section>
      </>
    );
  }
}

export default App;
