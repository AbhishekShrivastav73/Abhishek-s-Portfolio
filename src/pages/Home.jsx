import React from "react";
import Navbar from "../components/Navbar";
import IdCard from "../components/IdCard";
import Hero from "../components/Hero";
import Box from "../components/Box";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="flex md:items-center  p-8  flex-col  ">
        <Hero />
        {/* <IdCard/> */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          <Box
            bgcolor="https://static.vecteezy.com/system/resources/thumbnails/020/544/792/small/gradient-orange-waves-background-fluid-gradient-shapes-composition-vector.jpg"
            color="text-white"
            title="My Achievements"
            icon="GiPodiumWinner"
            description="Hackathons, Certifications, or Project milestones."
          />
          <Box
            bgcolor="https://media.istockphoto.com/id/1388817756/vector/art-background-of-blue-and-green-squares-connected-diagonally-geometric-texture-abstract-art.jpg?s=612x612&w=0&k=20&c=oswEX3lg3C1JzfmLav9c7JqVo5G_ZVB26PjuD1Ze3e8="
            color="text-black"
            title="My Projects"
            description="Crafted with Love."
          />
          <Box
            bgcolor="https://imgs.search.brave.com/Cny1K13rgTH__xZ9EzHCVrdLLiLihtK4wxQLO3w6C08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgyL2Ux/LzEwLzgyZTExMGFk/ZDlmYjExYzgwZDhl/MjBiODRmZDVjNjAw/LmpwZw"
            color="[#3FD2F1]"
            title="Tech Stack"
            description=" React.js | Redux | Node.js | Express | MongoDB and more..."
          />
        </div>
        <hr className=" w-1/3 my-8"/>
        <div className="w-full ">
          <h3 className="text-6xl md:text-7xl font-black">RECENT</h3>
          <h3 className="text-6xl md:text-7xl font-black text-zinc-600">PROJECTS.</h3>
        </div>
      </main>
    </div>
  );
}
