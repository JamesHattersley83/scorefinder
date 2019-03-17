import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Search from "./components/layout/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
