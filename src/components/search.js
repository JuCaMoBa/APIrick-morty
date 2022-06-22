import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <>
        <h1>Characters</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input
            onChange={this.props.handleChange}
            type="text"
            placeholder="Search for characters"
          />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}

export default Search;
