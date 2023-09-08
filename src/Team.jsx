import { useState } from "react";

export default function Team() {
  const handelAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };

  const removeTeam = () => {
    setTeam(team - 1);
  };

  const [team, setTeam] = useState(11);

  const tramStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={tramStyle}>
      <h3>Players: {team} </h3>
      <button onClick={handelAdd}>Add</button>
      <button onClick={removeTeam}>Remove</button>
    </div>
  );
}
