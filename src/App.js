import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TeamList from "./components/TeamList";
import { teams } from "./teams";

class App extends Component {
  state = {
    teams: teams
  };

  componentDidMount() {
    const apiKey = "491659630092491e821fa9ea920342da";
    fetch(
      "https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED",
      {
        headers: {
          "X-Auth-Token": apiKey
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        return console.log(data.matches);
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <TeamList teams={this.state.teams} />
      </div>
    );
  }
}

export default App;
