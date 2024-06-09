import React from "react";
import image from "/src/assets/destination/background-destination-mobile.jpg";
import Navbar from "../Navbar";

const Destination = () => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="w-full h-screen bg-cover bg-center p-6"
    >
      <Navbar />
    </div>
  );
};

export default Destination;
