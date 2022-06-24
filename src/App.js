import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import CardList from "./components/CardList";

class App extends Component {
  myref;
  intersectionObserver;
  constructor() {
    super();
    this.myref = React.createRef();
    this.state = {
      characters: {},
      singleCharacter: {},
      filterCharacter: "",
      nextPage: 2,
    };

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { nextPage } = this.state;
            console.log("final");
            this.setState({ nextPage: nextPage + 1 });
            this.fetchDataMoreCharacters();
          }
        });
      },
      { threshold: 1, rootMargin: "1px" }
    );
  }
  componentDidMount() {
    this.fetchDataAllCharacters();
  }

  componentDidUpdate() {
    this.intersectionObserver.observe(this.myref.current);
  }

  componentWillUnmount() {
    this.intersectionObserver.disconnect();
  }

  fetchDataAllCharacters = async () => {
    try {
      const response = await axios("https://rickandmortyapi.com/api/character");
      this.setState({ characters: response });
    } catch (error) {
      new Error(error);
    }
  };

  fetchDataMoreCharacters = async () => {
    const { nextPage } = this.state;
    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/?page=${nextPage}`
      );
      this.setState({ characters: response });
    } catch (error) {
      new Error(error);
    }
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

  handleChange = (event) => {
    this.setState({ filterCharacter: event.target.value });
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
        <div ref={this.myref} />
      </>
    );
  }
}

export default App;
