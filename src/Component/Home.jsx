import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="home bg-[#0b0217] w-full h-screen bg-cover bg-center p-6 sm:p-0">
      <Sidebar />
      <Navbar />
      <div className="lg:flex justify-around items-center lg:gap-[120px] mt-16 lg:mt-32 grid">
        <div className="text-white text-center lg:text-left xl:w-[540px] lg:mt-12 lg:leading-10 max-w-[512px]">
          <h2 className="text-2xl">So, you want to travel to</h2>
          <h2 className="text-[5rem] lg:text-[10rem] lg:mt-20 lg:mb-20">
            SPACE
          </h2>
          <p className="xl:text-xl ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex justify-center mt-20">
          <button className="text-[#0b0217] text-center text-[2rem] rounded-full bg-white w-[120px] h-[120px] p-6">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
