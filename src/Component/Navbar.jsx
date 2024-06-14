import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

function Navbar() {
  return (
    <div className="text-white hidden sm:flex ">
      <div className="flex items-center justify-between w-full overflow-hidden ">
        <div className="ml-6 ">
          <img src={logo} alt="logo" />
        </div>
        <nav className="bg-[#0b0217] w-[640px] h-[96px] flex  items-center justify-center p-6 ">
          <Link className="text-2xl mr-10" to="/">
            HOME
          </Link>
          <Link className="text-2xl mr-10" to="/destination">
            02 DESTINATION
          </Link>
          <Link className="text-2xl mr-10" to="/crew">
            02 CREW
          </Link>
          <Link className="text-2xl mr-10" to="/technology">
            03 TECHNOLOGY
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
