import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Crew = () => {
  return (
    <div className="crew w-full h-screen bg-cover bg-center p-6 sm:p-0">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default Crew;
