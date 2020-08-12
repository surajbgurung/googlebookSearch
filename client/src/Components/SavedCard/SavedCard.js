import React from "react";
import axios from "axios";
import "./SavedCard.css";

export default function SavedCard(props) {
  const title = props.title;
  const authors = props.authors;
  const thumbnail = props.thumbnail;
  const description = props.description;
  const link = props.link;
  const getBooks = props.getBooks;
  const book_id = props._id;

  const handleDelete = (book_id) => {
    const deletePath = `/api/books/${book_id}`;
    axios
      .delete(deletePath)
      .then((result) => {
        getBooks();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card card-fluid mt-2 bg-dark text-white">
      <h1 className="card-header">
        {title}
        <button
          type="button"
          className="btn btn-sm btn-danger float-right mr-2"
          onClick={() => handleDelete(book_id)}
        >
          Delete
        </button>
      </h1>
      <div className="card-body">
        <img src={thumbnail} alt="book" className="float-left mr-2"></img>
        <p className="">Authors: {authors}</p>
        <p>Synopsis: {description}</p>
        <a rel="noopener noreferrer" href={link} target="_blank">
          Link: {link}
        </a>
      </div>
    </div>
  );
}
