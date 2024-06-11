import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

function Home() {
  return (
    <div className="home w-full h-screen bg-cover bg-center p-6 sm:p-0">
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default Home;
