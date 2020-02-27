import React, { Component } from 'react';
import StandingsTable from './StandingsTable';

class Standings extends Component {
  constructor() {
    super();
    this.state = {
      standingsData: []
    };
  }

  componentDidMount() {
    fetch(
      'https://api.football-data.org/v2/competitions/PL/standings?standingType=TOTAL',
      {
        headers: {
          'X-Auth-Token': '491659630092491e821fa9ea920342da'
        }
      }
    )
      .then(response => response.json())
      .then(data => this.setState({ standingsData: data.standings[0].table }));
  }

  render() {
    const { standingsData } = this.state;
    return <StandingsTable standingsData={standingsData} />;
  }
}

export default Standings;
