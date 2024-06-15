import React from "react";
import data from "../data.json";

function Ansari() {
  const AnsariCrew = data.crew.filter(
    (crew) => crew.role === "Flight Engineer",
  );
  return (
    <div className="text-center">
      {AnsariCrew.map((crew) => (
        <div key={crew.role}>
          <h1 className="text-2xl uppercase mt-20">{crew.role}</h1>
          <h2 className="text-[2rem] text-white uppercase">{crew.name}</h2>
          <p className="mt-6 ">{crew.bio}</p>
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

export default Ansari;
