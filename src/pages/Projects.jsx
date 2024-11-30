import React from "react";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="p-8">
        <div className="text-2xl text-zinc-600 font-black">
          <h1>
            CRAFTED <br /> WITH <span className="text-red-500"> LOVE❤️</span>
          </h1>
          <h1 className="text-5xl md:text-8xl text-zinc-200">
            RECENT <br />
            <span className="text-zinc-600">PROJECTS.</span>
          </h1>
        </div>
        <div>
          
        </div>
      </main>
    </div>
  );
}
