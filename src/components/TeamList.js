import React from "react";
import Team from "./Team";
import logo from "../img/logo.svg";

const TeamList = ({ teams }) => {
  const teamArray = teams.map((team, i) => {
    return (
      <Team
        key={i}
        id={teams[i].id}
        crestUrl={teams[i].crestUrl}
        name={teams[i].name}
        founded={teams[i].founded}
        ground={teams[i].venue}
      />
    );
  });
  return (
    <React.Fragment>
      <img className="mb-5 mx-auto d-block" src={logo} alt="logo" />
      <div className="container d-flex flex-wrap">{teamArray}</div>
    </React.Fragment>
  );
};

export default TeamList;
