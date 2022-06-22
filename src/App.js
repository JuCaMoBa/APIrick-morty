import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/search";
import CardList from "./components/CardList";

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
        <section className="container-form">
          <Search
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
        <section className="container-character">
          <CardList characters={characters} />
        </section>
      </>
    );
  }
}

export default App;
