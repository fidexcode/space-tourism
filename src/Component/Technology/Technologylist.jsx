import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Vehicle from "./Vehicle";
import Spacesport from "./Spacesport";
import Capsule from "./Capsule";

const Technologylist = () => {
  const [tech, setTech] = useState("vehicle");
  const handleClick = (selectedTech) => {
    setTech(selectedTech);
  };
  return (
    <div className="technology bg-[#0b0217] w-full h-screen bg-cover bg-center  sm:p-0">
      <Sidebar />
      <Navbar />
      <div className="text-white flex gap-x-10 justify-center items-center mt-12">
        <span className="text-slate-200">01</span>
        <h2 className="text-white">SPACE LAUNCH 101</h2>
      </div>
      <div className="grid relative">
        <div className="flex gap-6 absolute self-center justify-self-center mt-[210px] ">
          <button
            onClick={() => handleClick("vehicle")}
            className={`${tech === "vehicle" ? "bg-white text-black" : ""} h-16 w-16 border-2 text-[2rem] rounded-full border-white`}
          >
            1
          </button>
          <button
            onClick={() => handleClick("spacesport")}
            className={`${tech === "spacesport" ? "bg-white text-black" : ""} h-16 w-16 border-2 text-[2rem] rounded-full border-white`}
          >
            2
          </button>
          <button
            onClick={() => handleClick("capsule")}
            className={`${tech === "capsule" ? "bg-white text-black" : ""} h-16 w-16 border-2 text-[2rem] rounded-full border-white`}
          >
            3
          </button>
        </div>
        <div>
          {tech === "vehicle" && <Vehicle />}
          {tech === "spacesport" && <Spacesport />}
          {tech === "capsule" && <Capsule />}
        </div>
      </div>
    </div>
  );
};

export default Technologylist;
