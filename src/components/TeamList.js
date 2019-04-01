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
        founded={teams[i].founded}
        ground={teams[i].venue}
      />
    );
  });
  return (
    <React.Fragment>
      <h2 className="text-center mb-4">Premier League</h2>
      <div className="container d-flex flex-wrap">{teamArray}</div>
    </React.Fragment>
  );
};

export default TeamList;
