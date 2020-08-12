import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import ResultCardContainer from "../../ResultCardContainer/ResultCardContainer";

function SearchBooks(props) {
    return (
      <div>
        <SearchBar
          searchTerm={props.searchTerm}
          handleInputChange={props.handleInputChange}
          handleFormSubmit={props.handleFormSubmit}
        />
        <ResultCardContainer booklist={props.booklist}/>
      </div>
    );
  }

export default SearchBooks;
