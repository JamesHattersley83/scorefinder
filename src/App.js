import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Team from "./components/Team";

class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    };
  }

  // componentDidMount() {
  //   const url = "http://api.football-data.org/v2/teams/";
  //   const apiKey = "491659630092491e821fa9ea920342da";
  // }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Team />
      </div>
    );
  }
}

export default App;
