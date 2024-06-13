import React from "react";
import data from "../data.json";

function Europa() {
  const europaDestination = data.destinations.filter(
    (destination) => destination.name === "Europa",
  );
  return (
    <div>
      {europaDestination.map((dest) => (
        <div key={dest.name}>
          <h2>{dest.name}</h2>
          <img src={dest.images.png} alt="Europa" className="w-[100px]" />
          <p>{dest.description}</p>
          <p>{dest.travel}</p>
          <p>{dest.distance}</p>
        </div>
      ))}
    </div>
  );
}

export default Europa;
