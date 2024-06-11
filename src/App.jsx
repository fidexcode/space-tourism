import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/pages/Home";
import Destination from "./Component/pages/Destination";
import Crew from "./Component/pages/Crew";
import Technology from "./Component/pages/Technology";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
