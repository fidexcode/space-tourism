import React from "react";
import Navbar from "../Navbar";
import TechbgImage from "/src/assets/technology/background-technology-mobile.jpg";

const Technology = () => {
  return (
    <div
      style={{ backgroundImage: `url(${TechbgImage})` }}
      className="w-full h-screen bg-cover bg-center p-6"
    >
      <Navbar />
    </div>
  );
};

export default Technology;
