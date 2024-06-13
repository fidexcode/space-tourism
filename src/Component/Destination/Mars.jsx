import React from "react";
import data from "../data.json";

function Mars() {
  const marsDestination = data.destinations.filter(
    (destination) => destination.name === "Mars",
  );
  return (
    <div>
      {marsDestination.map((dest) => (
        <div key={dest.name}>
          <h2>{dest.name}</h2>
          <img src={dest.images.png} alt="mars" className="w-[100px]" />
          <p>{dest.description}</p>
          <p>{dest.travel}</p>
          <p>{dest.distance}</p>
        </div>
      ))}
    </div>
  );
}

export default Mars;
