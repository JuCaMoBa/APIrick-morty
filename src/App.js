import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import CardList from "./components/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: {},
      singleCharacter: {},
      filterCharacter: "",
      isVisible: false,
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

  fetchDataSingleCharacters = async (id) => {
    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      this.setState({ singleCharacter: response });
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

  handleClick = (id) => {
    this.fetchDataSingleCharacters(id);
    this.setState({ isVisible: true });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.fetchDataFilterCharacter();
  };

  render() {
    const { characters, isVisible, singleCharacter } = this.state;
    return (
      <>
        <section className="container-form">
          <Search
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </section>
        <section className="container-character">
          {isVisible ? (
            <CardList isVisible={isVisible} singleCharacter={singleCharacter} />
          ) : (
            <CardList
              handleClick={this.handleClick}
              isVisible={isVisible}
              characters={characters}
            />
          )}
        </section>
      </>
    );
  }
}

export default App;
