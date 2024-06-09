import React from "react";

import bgImage from "/src/assets/home/background-home-mobile.jpg";
import Navbar from "../Navbar";

function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="w-full h-screen bg-cover bg-center p-6"
    >
      <Navbar />
    </div>
  );
}

export default Home;
