import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Moon from "./Moon";
import Mars from "./Mars";
import Titans from "./Titans";
import Europa from "./Europa";

const Destinationlist = () => {
  const [selectedspace, setSelectedspace] = useState("moon");
  const handleclick = (spaceName) => {
    setSelectedspace(spaceName);
  };
  return (
    <div className="destination bg-[#0b0217] w-full h-screen bg-cover bg-center p-10 sm:p-0">
      <Sidebar />
      <Navbar />
      <div className="grid items-center justify-center text-center mt-12 gap-10 p-2">
        <div className="text-white flex gap-x-10 justify-center items-center">
          <span className="text-slate-200">01</span>
          <h2 className="text-white">PICK YOUR DESTINATION</h2>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-x-4 absolute mt-[220px] m-auto">
            <button
              onClick={() => handleclick("moon")}
              className={selectedspace === "moon" ? "text-red-500" : ""}
            >
              MOON
            </button>
            <button
              onClick={() => handleclick("mars")}
              className={selectedspace === "mars" ? "text-red-500" : ""}
            >
              MARS
            </button>
            <button
              onClick={() => handleclick("europa")}
              className={selectedspace === "europa" ? "text-red-500" : ""}
            >
              EUROPA
            </button>
            <button
              onClick={() => handleclick("titan")}
              className={selectedspace === "titan" ? "text-red-500" : ""}
            >
              TITAN
            </button>
          </div>
        </div>
        <div>
          {selectedspace === "moon" && <Moon />}
          {selectedspace === "mars" && <Mars />}
          {selectedspace === "europa" && <Europa />}
          {selectedspace === "titan" && <Titans />}
        </div>
      </div>
    </div>
  );
};

export default Destinationlist;
