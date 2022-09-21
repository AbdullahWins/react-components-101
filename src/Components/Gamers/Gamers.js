import React from "react";

const Gamers = () => {
  const Gamers = [
    { name: "Abdullah", role: "awper" },
    { name: "Golmatol", role: "suport" },
    { name: "PewDiePie", role: "IGL" },
  ];
  return <div>{Gamers.map((gamer) => Gamer(gamer))}</div>;
};

function Gamer(props) {
  return (
    <div>
      <h1>
        Hi this is {props.name} and I am a {props.role}
      </h1>
    </div>
  );
}

export default Gamers;