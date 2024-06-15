import React from "react";
import data from "../data.json";
function Capsule() {
  const capsuleTech = data.technology.filter(
    (tech) => tech.name === "Space capsule",
  );
  return (
    <div className="text-center">
      {capsuleTech.map((tech) => (
        <div key={tech.name}>
          <img
            src={tech.images.portrait}
            alt={tech.name}
            className="h-[300px] w-full m-auto mt-32"
          />
          <h1 className="text-lg mt-32">THE TERMINOLOGY...</h1>
          <h2 className="text-white text-[2rem] mt-2 uppercase">{tech.name}</h2>
          <p className="mt-4 px-6 pb-4 ">{tech.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Capsule;
