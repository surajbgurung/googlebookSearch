const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

const Book = require("./models/Book");

// Send every request to the React app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

let MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://user:suraj123@ds139781.mlab.com:39781/heroku_12b8t8c0";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Define API routes here
app.get("/api/saved-books", (request, response) => {
  Book.find({})
    .then(function (data) {
      response.status(200).json(data);
    })
    .catch(function () {
      response.status(404).end("Bad things, Mikey, bad things....");
    });
});

app.delete("/api/books/:id", (request, response) => {
  const mongoID = request.params.id;
  Book.remove({
    _id: mongoID,
  })
    .then((data) => {
      response.status(200).end();
    })
    .catch((error) => {
      response.status(404).send(error.message);
    });
});

app.post("/api/books", (request, response) => {
  const bookData = request.body;
  Book.create(bookData)
    .then(function () {
      response.status(200).end();
    })
    .catch(function (error) {
      response.status(404).send(error.message);
    });
});

// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
