import React from "react";

const Team = ({ name, founded, ground, crestUrl }) => {
  return (
    <div
      className="card mx-auto shadow p-3 mb-5 bg-white rounded"
      style={{ width: "20rem", textAlign: "center" }}
    >
      <img alt="team" src={`${crestUrl}`} className="card-img-top h-100" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">Founded: {founded}</p>
        <p className="card-text">Ground: {ground}</p>
      </div>
    </div>
  );
};

export default Team;
