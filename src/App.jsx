import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Destinationlist from "./Component/Destinationlist";
import Crewlist from "./Component/crew/Crewlist";
import Technologylist from "./Component/Technology/Technologylist";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destinationlist />} />
        <Route path="/crew" element={<Crewlist />} />
        <Route path="/technology" element={<Technologylist />} />
      </Routes>
    </div>
  );
}

export default App;
