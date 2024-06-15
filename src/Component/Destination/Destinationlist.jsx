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
      <div className="text-white flex gap-x-10 justify-center items-center mt-12">
        <span className="text-slate-200">01</span>
        <h2 className="text-white">PICK YOUR DESTINATION</h2>
      </div>
      <div className="grid relative p-10">
        <div className="flex justify-center gap-x-10 absolute self-center justify-self-center mb-48">
          <button
            onClick={() => handleclick("moon")}
            className={
              selectedspace === "moon"
                ? "text-white border-b-2 border-white"
                : ""
            }
          >
            MOON
          </button>
          <button
            onClick={() => handleclick("mars")}
            className={
              selectedspace === "mars"
                ? "text-white border-b-2 border-white"
                : ""
            }
          >
            MARS
          </button>
          <button
            onClick={() => handleclick("europa")}
            className={
              selectedspace === "europa"
                ? "text-white border-b-2 border-white"
                : ""
            }
          >
            EUROPA
          </button>
          <button
            onClick={() => handleclick("titan")}
            className={
              selectedspace === "titan"
                ? "text-white border-b-2 border-white"
                : ""
            }
          >
            TITAN
          </button>
        </div>
        <div className="text-center">
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
