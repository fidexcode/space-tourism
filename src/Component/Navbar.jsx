import React from "react";

const Navbar = () => {
  return (
    <div>
      <h1 className="text-green-600">
        <a href="/">Home</a>
        <a href="/destination">Destination</a>
        <a href="/crew">Crew</a>
        <a href="/technologies">Technologies</a>
      </h1>
    </div>
  );
};

export default Navbar;
