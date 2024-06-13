import React from "react";
import data from "../data.json";
function Titans() {
  const titanDestination = data.destinations.filter(
    (destination) => destination.name === "Titan",
  );
  return (
    <div>
      {titanDestination.map((dest) => (
        <div key={dest.name}>
          <h2>{dest.name}</h2>
          <img src={dest.images.png} alt="titan" className="w-[100px]" />
          <p>{dest.description}</p>
          <p>{dest.travel}</p>
          <p>{dest.distance}</p>
        </div>
      ))}
    </div>
  );
}

export default Titans;
