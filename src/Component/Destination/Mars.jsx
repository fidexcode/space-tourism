import React from "react";
import data from "../data.json";

function Mars() {
  const marsDestination = data.destinations.filter(
    (destination) => destination.name === "Mars",
  );
  return (
    <div>
      {marsDestination.map((dest) => (
        <div key={dest.name} className="grid gap-6">
          <img
            src={dest.images.png}
            alt="mars"
            className="w-[130px] m-auto mt-6"
          />
          <h2 className="mt-20 text-[5rem] lg:text-[10rem] uppercase text-white">
            {dest.name}
          </h2>
          <p>{dest.description}</p>
          <hr />
          <div>
            <p>AVG. DISTANCE</p>
            <p className="text-[2rem] text-white uppercase">{dest.distance}</p>
          </div>
          <div>
            <p>EST. TRAVEL TIME</p>
            <p className="text-[2rem] text-white uppercase">{dest.travel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mars;
