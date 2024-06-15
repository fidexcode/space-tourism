import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Hurley from "./Hurley";
import Mark from "./Mark";
import Glover from "./Glover";
import Ansari from "./Ansari";

const Crewlist = () => {
  const [crew, setCrew] = useState("Hurley");
  const handleClick = (selectedCrew) => {
    setCrew(selectedCrew);
  };
  return (
    <div className="crew bg-[#0b0217] w-full h-screen bg-cover bg-center p-10 sm:p-0">
      <Sidebar />
      <Navbar />
      <div className="text-white flex gap-x-10 justify-center items-center mt-12">
        <span className="text-slate-200">02</span>
        <h2 className="text-white">MEET YOUR CREW</h2>
      </div>
      <div className="grid relative">
        <div className="flex justify-center gap-x-10 absolute self-center justify-self-center mb-10 ">
          <button
            onClick={() => handleClick("Hurley")}
            className={`h-5 w-5 bg-slate-400 rounded-full ${crew === "Hurley" ? "bg-[#fff]" : ""}`}
          ></button>
          <button
            onClick={() => handleClick("Mark")}
            className={`h-5 w-5 bg-slate-400 rounded-full ${crew === "Mark" ? "bg-[#fff]" : ""}`}
          ></button>
          <button
            onClick={() => handleClick("Glover")}
            className={`h-5 w-5 bg-slate-400 rounded-full ${crew === "Glover" ? "bg-[#fff]" : ""}`}
          ></button>
          <button
            onClick={() => handleClick("Ansari")}
            className={`h-5 w-5 bg-slate-400 rounded-full ${crew === "Ansari" ? "bg-[#fff]" : ""}`}
          ></button>
        </div>
        <div className="text-white ">
          {crew === "Glover" && <Glover />}
          {crew === "Ansari" && <Ansari />}
          {crew === "Hurley" && <Hurley />}
          {crew === "Mark" && <Mark />}
        </div>
      </div>
    </div>
  );
};

export default Crewlist;
