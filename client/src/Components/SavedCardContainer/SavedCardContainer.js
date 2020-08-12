import React from "react";
import SavedCard from "../SavedCard/SavedCard";

function ResultsBookList(props) {
  const BookList = props.booklist;
  const getBooks = props.getSavedBooks;
  return (
    <div className="container-fluid">
      {BookList.map((book, index) => (
        <SavedCard
          key={index}
          title={book.title}
          authors={book.authors}
          description={book.description}
          thumbnail={book.thumbnail}
          link={book.link}
          _id={book._id}
          getBooks={getBooks}
        />
      ))}
    </div>
  );
}

export default ResultsBookList;
