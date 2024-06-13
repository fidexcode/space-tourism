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
    <div className="destination bg-[#0b0217] w-full h-screen bg-cover bg-center p-6 sm:p-0">
      <Sidebar />
      <Navbar />
      <div className="flex gap-4 text-white">
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
      <div className="text-white flex gap-10">
        {selectedspace === "moon" && <Moon />}
        {selectedspace === "mars" && <Mars />}
        {selectedspace === "europa" && <Europa />}
        {selectedspace === "titan" && <Titans />}
      </div>
    </div>
  );
};

export default Destinationlist;
