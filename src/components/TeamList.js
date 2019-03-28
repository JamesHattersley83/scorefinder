import React from "react";
import Team from "./Team";

const TeamList = ({ teams }) => {
  const teamArray = teams.map((team, i) => {
    return (
      <Team
        key={i}
        id={teams[i].id}
        crestUrl={teams[i].crestUrl}
        name={teams[i].name}
      />
    );
  });
  return <div className="container d-flex flex-wrap">{teamArray}</div>;
};

export default TeamList;
