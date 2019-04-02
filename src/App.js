import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Fixtures from "./components/Fixtures";
import TeamList from "./components/TeamList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: []
    };
  }

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
      <Router>
        <React.Fragment>
          <NavBar />
          <div className="container">
            <TeamList teams={teams} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
