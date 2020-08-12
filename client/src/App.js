import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import SavedBooks from "./Components/pages/SavedBooks/SavedBooks";
import SearchBooks from "./Components/pages/SearchBooks/SearchBooks";
import API from "../src/utils/API";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    searchTerm: "",
    booklist: [],
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.searchTerm).then((result) => {
      const searchresult = result.data.items;
      this.setState({ booklist: searchresult, searchTerm: "" });
    });
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      searchTerm: value,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/">
              <SearchBooks 
              searchTerm={this.state.searchTerm}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              booklist={this.state.booklist}
              />
            </Route>
            <Route path="/saved">
              <SavedBooks />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
