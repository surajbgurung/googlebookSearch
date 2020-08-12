import React from "react";
import "./Jumbotron.css";

export default function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid mb-0">
      <h1 className="display-3 text-center text-white">
        Google Books Search &amp; Save
      </h1>
      <p className="text-center h3 text-white">
        Search for and save books of interest
      </p>
    </div>
  );
}
