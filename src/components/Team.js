import React from "react";

const Team = ({ name, founded, ground, crestUrl }) => {
  return (
    <div
      className="card p-4 shadow m-auto bg-white rounded"
      style={{ width: "16rem", textAlign: "center" }}
    >
      <img alt="team" src={`${crestUrl}`} class="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">Founded: {founded}</p>
        <p className="card-text">Ground: {ground}</p>
      </div>
    </div>
  );
};

export default Team;
