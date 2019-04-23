import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";

const Team = ({ name, crestUrl, founded, ground }) => {
  return (
    <div
      className="card text-center mx-auto shadow p-3 mb-5 rounded"
      style={{ width: "20rem" }}
    >
      <img alt="team" src={`${crestUrl}`} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Founded: {founded}</li>
          <li className="list-group-item">Ground: {ground}</li>
        </ul>
        <div className="card-body">
          <Link to="/fixtures" className="btn btn-primary mr-2">
            Fixtures
          </Link>
          <Link to="/results" className="btn btn-primary">
            Results
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Team;
