import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import TeamList from './components/TeamList';
import Results from './components/Results';
import Fixtures from './components/Fixtures';
import Standings from './components/Standings';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      leagueId: '',
      fixtures: [],
      results: []
    };
  }

  fetchTeams() {
    fetch('https://api.football-data.org/v2/competitions/PL/teams', {
      headers: {
        'X-Auth-Token': '491659630092491e821fa9ea920342da'
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ teams: data.teams }));
  }

  componentDidMount() {
    this.fetchTeams();
  }

  render() {
    const { teams } = this.state;

    return (
      <Router basename="/ScoreFinder">
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" render={() => <TeamList teams={teams} />} />
            <Route path="/fixtures" component={Fixtures} />
            <Route path="/results" component={Results} />
            <Route path="/standings" component={Standings} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
