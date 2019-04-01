import React from "react";

const Team = ({ name, crestUrl, founded, ground }) => {
  return (
    <div
      className="card text-center mx-auto shadow p-3 mb-5 rounded"
      style={{ width: "20rem" }}
    >
      <img alt="team" src={`${crestUrl}`} className="card-img-top h-50" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">Founded: {founded}</p>
        <p className="card-text">Ground: {ground}</p>
        <a href="#" class="btn btn-primary mr-2">
          Fixtures
        </a>
        <a href="#" class="btn btn-primary">
          Results
        </a>
      </div>
    </div>
  );
};

export default Team;
