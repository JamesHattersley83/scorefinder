import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TeamList from "./components/TeamList";
// import { teams } from "./teams";

class App extends Component {
  state = {
    teams: []
  };

  componentDidMount() {
    fetch("https://api.football-data.org/v2/competitions/2021/teams", {
      headers: {
        "X-Auth-Token": "491659630092491e821fa9ea920342da"
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ teams: data.teams }));
  }

  render() {
    const { teams } = this.state;

    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <TeamList teams={teams} />
        </div>
      </div>
    );
  }
}

export default App;
