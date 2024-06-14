import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import menubars from "../assets/shared/icon-hamburger.svg";
import logo from "../assets/shared/logo.svg";
import close from "../assets/shared/icon-close.svg";
const Sidebar = () => {
  const [openmenu, setOpenmenu] = useState(false);
  const showMenu = () => {
    setOpenmenu(!openmenu);
  };
  const closeMenu = () => {
    setOpenmenu(!openmenu);
  };
  return (
    <div className=" text-white sm:hidden">
      <div className="flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="w-12" />
        </div>
        <div>
          <img src={menubars} alt="menubars" onClick={showMenu} />
        </div>
      </div>
      <nav
        className={`${openmenu ? "w-[254px]" : "w-0 hidden"} bg-[#0b0217] h-screen absolute z-10 right-0 top-0 p-6`}
      >
        <img
          src={close}
          alt="close"
          onClick={closeMenu}
          className="absolute right-6 top-10"
        />
        <div className="mt-32 ml-4 ">
          <Link className="mb-6 text-xl font-bold block" to="/">
            00 HOME
          </Link>
          <Link className="mb-6 text-xl font-bold block" to="/destination">
            01 DESTINATION
          </Link>
          <Link className="mb-6 text-xl font-bold block" to="/crew">
            02 CREW
          </Link>
          <Link className="mb-6 text-xl font-bold block" to="/technology">
            03 TECHNOLOGY
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
