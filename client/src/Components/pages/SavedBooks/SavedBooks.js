import React, { Component } from "react";
import axios from "axios";
import SearchCardContainer from "../../SavedCardContainer/SavedCardContainer";

class SavedBooks extends Component {
  state = {
    savedBooks: [],
  };

  componentDidMount() {
    this.getSavedBooksFromDB();
  }

  getSavedBooksFromDB = () => {
    axios
      .get("/api/saved-books")
      .then((results) => {
        const savedResults = results.data;
        this.setState({ savedBooks: savedResults });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container-fluid">
        <SearchCardContainer
          booklist={this.state.savedBooks}
          getSavedBooks={this.getSavedBooksFromDB}
        />
      </div>
    );
  }
}

export default SavedBooks;
