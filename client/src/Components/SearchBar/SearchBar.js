import React from "react";

export default function SearchBar(props) {
  return (
    <div className="container">
      <form
        className="mt-2 p-2 border border-dark bg-light"
        onSubmit={props.handleFormSubmit}
      >
        <div className="form-group">
          <h1>Find a Book to Explore!</h1>
          <hr />
          <label htmlFor="searchBar" className="mr-1">
            Search for Books
          </label>
          <input
            type="text"
            className="form-control"
            id="searchBar"
            value={props.searchTerm}
            onChange={props.handleInputChange}
            name="searchTerm"
          ></input>
        </div>
        <button type="submit" className="btn btn-dark">
          Search
        </button>
      </form>
    </div>
  );
}
