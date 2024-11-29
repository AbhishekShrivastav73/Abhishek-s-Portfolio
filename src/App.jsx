import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Acheivements from "./pages/Acheivements";

function App() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Acheivements />} />
      </Routes>
    </div>
  );
}

export default App;
