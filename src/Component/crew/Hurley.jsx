import React from "react";
import data from "../data.json";
function Hurley() {
  const HurleyCrew = data.crew.filter((crew) => crew.role === "Commander");
  return (
    <div>
      {HurleyCrew.map((crew) => (
        <div key={crew.role} className="text-center">
          <h1 className="text-2xl uppercase mt-20">{crew.role}</h1>
          <h2 className="text-[2rem] text-white uppercase">{crew.name}</h2>
          <p className="mt-6">{crew.bio}</p>
          <img
            src={crew.images.png}
            alt={crew.name}
            className="w-[200px] m-auto mt-32"
          />
        </div>
      ))}
    </div>
  );
}

export default Hurley;
