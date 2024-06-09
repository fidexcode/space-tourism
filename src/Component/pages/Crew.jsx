import React from "react";
import Crewbgimage from "/src/assets/crew/background-crew-mobile.jpg";
import Navbar from "../Navbar";

const Crew = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Crewbgimage})` }}
      className="w-full h-screen bg-cover bg-center p-6"
    >
      <Navbar />
    </div>
  );
};

export default Crew;
