import React, { useState } from "react";
import Navbar from "../components/Navbar";
import IdCard from "../components/IdCard";
import Hero from "../components/Hero";
import Box from "../components/Box";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Home() {
  const [box, setBox] = useState([
    {
      title: "My Achievements",
      description: "Hackathons, Certifications, or Project milestones.",
      bgcolor:
        "https://static.vecteezy.com/system/resources/thumbnails/020/544/792/small/gradient-orange-waves-background-fluid-gradient-shapes-composition-vector.jpg",
      color: "text-white",
      to: "/achievements",
    },
    {
      title: "My Projects",
      description: "Crafted with Love.",
      bgcolor:
        "https://media.istockphoto.com/id/1388817756/vector/art-background-of-blue-and-green-squares-connected-diagonally-geometric-texture-abstract-art.jpg?s=612x612&w=0&k=20&c=oswEX3lg3C1JzfmLav9c7JqVo5G_ZVB26PjuD1Ze3e8=",
      color: "text-black",
      to: "/projects",
    },
    {
      title: "Tech Stack",
      description: "React.js | Redux | Node.js | Express | MongoDB and more...",
      bgcolor:
        "https://imgs.search.brave.com/Cny1K13rgTH__xZ9EzHCVrdLLiLihtK4wxQLO3w6C08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgyL2Ux/LzEwLzgyZTExMGFk/ZDlmYjExYzgwZDhl/MjBiODRmZDVjNjAw/LmpwZw",
      color: "text-white",
      to: "/tech-stack",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      title: "E-COMMERCE",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          delectus ratione itaque accusamus ex doloribus iure id ducimus.
          Quaerat odit a fugiat odio quam!`,
      img: "https://imgs.search.brave.com/mzQZcAsKY1o5t_Lsyq27soBAUBntlMjTV50IGf1qthE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzE2LzU1LzAz/LzM2MF9GXzMxNjU1/MDM2Nl82SUV1ZWRB/SnFaOUpZSXFuUXFt/cmFvTFBwZjZxZlBD/Yi5qcGc",
      flexDirection: "flex-row",
      liveLink: "",
      bgColor: "[#F46C38]",
      techStack: ["ReactJS", "Redux", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Spotify Clone",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          delectus ratione itaque accusamus ex doloribus iure id ducimus.
          Quaerat odit a fugiat odio quam!`,
      img: "https://imgs.search.brave.com/a-ZDrNBbQNMIpmkyncHEZ1YCcyP37ViizecuD-PzLNQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/ZS5tYWdlbmVzdC5j/b20vd3Avd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDkvYmVz/dC0xMDI0eDU3Ny5q/cGc",
      flexDirection: "flex-row-reverse",
      bgColor: "[#58C2F9]",
      techStack: ["ReactJS", "Redux", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Music Player",
      img: "https://imgs.search.brave.com/LJwjEDunvXKIwVPWRgzIut45iDEuFKY8Q-y8tSe2G3c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kdWV0/LWNkbi52b3gtY2Ru/LmNvbS90aHVtYm9y/LzB4MDoyMDAweDEx/MjUvMjQwMHgxNjAw/L2ZpbHRlcnM6Zm9j/YWwoMTAwMHg1NjM6/MTAwMXg1NjQpOmZv/cm1hdCh3ZWJwKS9j/ZG4udm94LWNkbi5j/b20vdXBsb2Fkcy9j/aG9ydXNfYXNzZXQv/ZmlsZS8yNTY5Mjk4/OS9FMkVfU2NyZWVu/cy5qcGc",
    },
  ]);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="flex md:items-center  p-8  flex-col  ">
        <Hero />
        {/* <IdCard/> */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          {box.map((items, idx) => {
            return <Box data={items} key={idx} />;
          })}
        </div>
        <hr className=" w-1/3 my-8" />
        <div className="w-full">
          <h3 className="text-6xl md:text-8xl font-black">RECENT</h3>
          <h3 className="text-6xl md:text-8xl font-black  text-zinc-600">
            PROJECTS.
          </h3>
        </div>
        <div className="flex md:flex-row justify-center flex-wrap flex-col  w-full gap-5 py-8">
          {projects.map((elem, idx) => {
            return <ProjectCard data={elem} key={idx} />;
          })}
        </div>
        <Link to='/projects' className="border hover:bg-zinc-200 hover:text-zinc-950 duration-300 ease-in-out px-6 text-center py-2 rounded-full text-sm tracking-tight flex items-center gap-3">
          Explore All Projects <FaArrowUpRightFromSquare />
        </Link>
      </main>
    </div>
  );
}
