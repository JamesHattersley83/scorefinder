import React from "react";

const Team = () => {
  return (
    <div
      className="card shadow m-auto p-3 mb-5 bg-white rounded"
      style={{ width: "16rem", textAlign: "center" }}
    >
      <img
        alt="team"
        src="https://kassiesa.net/uefa/clubs/images/Leeds-United.png"
        class="card-img-top"
      />
      <div className="card-body">
        <h3 className="card-title">Leeds United</h3>
        <p className="card-text">Founded: 1900</p>
        <p className="card-text">Ground: Elland Road</p>
      </div>
    </div>
  );
};

export default Team;
