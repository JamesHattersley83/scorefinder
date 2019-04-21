import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import TeamList from "./components/TeamList";
import Results from "./components/Results";
import Fixtures from "./components/Fixtures";

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
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <TeamList teams={teams} />} />
          <Route path="/fixtures" component={Fixtures} />
          <Route path="/results" component={Results} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
