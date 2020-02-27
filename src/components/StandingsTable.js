import React from 'react';
import logo from '../img/logo.svg';

const StandingsTable = props => {
  return (
    <div className="container d-flex flex-wrap " style={{ width: '50rem' }}>
      <div className="card text-center mx-auto shadow p-3 mb-5 rounded table-responsive-sm">
        <img className="mb-5 mx-auto d-block" src={logo} alt="logo" />
        <h1>Standings</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Team</th>
              <th scope="col">Pl</th>
              <th scope="col">W</th>
              <th scope="col">D</th>
              <th scope="col">L</th>
              <th scope="col">F</th>
              <th scope="col">A</th>
              <th scope="col">GD</th>
              <th scope="col">Pts</th>
            </tr>
          </thead>
          <tbody>
            {props.standingsData.map((item, index) => {
              return (
                <tr key={item.team.id}>
                  <td>{item.position}</td>
                  <td>{item.team.name}</td>
                  <td>{item.playedGames}</td>
                  <td>{item.won}</td>
                  <td>{item.draw}</td>
                  <td>{item.lost}</td>
                  <td>{item.goalsFor}</td>
                  <td>{item.goalsAgainst}</td>
                  <td>{item.goalDifference}</td>
                  <td>{item.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StandingsTable;
