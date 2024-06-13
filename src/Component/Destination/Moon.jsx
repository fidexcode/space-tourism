import React from "react";
import data from "../data.json";

function Moon() {
  const moonDestination = data.destinations.filter(
    (destination) => destination.name === "Moon",
  );
  return (
    <div>
      {moonDestination.map((dest) => (
        <div key={dest.name}>
          <h2>{dest.name}</h2>
          <img src={dest.images.png} alt="moon" className="w-[100px]" />
          <p>{dest.description}</p>
          <p>{dest.travel}</p>
          <p>{dest.distance}</p>
        </div>
      ))}
    </div>
  );
}

export default Moon;
