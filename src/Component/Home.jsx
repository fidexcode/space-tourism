import React from "react";
import bgImage from "../assets/home/background-home-mobile.jpg";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="bg-slate-500 w-full h-screen bg-cover bg-center p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <img className="w-12" src={logo} alt="logo" />
        </div>
        <div>
          <img className="w-8" src={hamburger} alt="hamburger" />
        </div>
      </div>
      <div className="text-[#d0d6f9] text-center mt-12 font-sans">
        <h2 className="mt-12 text-xl">So, you want to travel to</h2>
        <h2 className="text-[40px] text-white mt-8">SPACE</h2>
        <p className="mt-8 text-xl">
          So, you want to travel to Space Let’s face it; if you want to go to
          space, you might as well genuinely go to outer space and not hover
          kind of on the edge of it. Well sit back, and relax because we’ll give
          you a truly out of this world experience!
        </p>
      </div>
      <div className="flex justify-center items-center mx-auto mt-60 h-28 w-28 p-3 bg-white rounded-full">
        <p className="text-center text-[#obod17] text-xl">EXPLORE</p>
      </div>
    </div>
  );
};

export default Home;
