import React from "react";

const Team = ({ name, crestUrl }) => {
  return (
    <div
      className="card mx-auto shadow p-3 mb-5 rounded"
      style={{ width: "20rem", textAlign: "center" }}
    >
      <img alt="team" src={`${crestUrl}`} className="card-img-top h-50" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
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
