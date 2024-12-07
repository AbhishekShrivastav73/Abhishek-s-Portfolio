import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Acheivements from "./pages/Acheivements";
import Projects from "./pages/Projects";
import gsap from "gsap";

function App() {
  return (
    <div className="bg-zinc-950 relative h-fit text-zinc-50">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Acheivements />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
