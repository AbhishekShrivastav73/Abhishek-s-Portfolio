import React from "react";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ProjectCard({ data }) {
  return (
    <div
      className={`w-full md:w-[45%] bg-zinc-800 rounded-xl p-6 text-white flex flex-col transition duration-300 ease-in-out`}
      style={{ backgroundColor: `${data.bgColor}` }}
      onMouseOver={(e) => (e.target.style.backgroundColor = `${data.bgColor}`)}
      onMouseOut={(e) => (e.target.style.backgroundColor = `zinc-800`)}
    >
      <div className="h-[80%] rounded-xl overflow-hidden" >
        <img className="hover:scale-110 ease-in-out transition-all duration-500 delay-75 w-full h-full" src={data.img} alt="" />
      </div>
      <h4 className="font-bold tracking-tighter text-3xl my-2">{data.title}</h4>
      <div className="flex flex-col-reverse  md:flex-row w-full md:items-center gap-2 md:gap-4">
        <div className="flex items-center gap-3 border-2 px-4 py-2 rounded-full font-semibold w-fit">
          <FiGithub />
          <span>GitHub Repo</span>
        </div>
        <Link className="font-bold flex items-center gap-1">
          Live Preview <FaArrowUpRightFromSquare />
        </Link>
      </div>
    </div>
  );
}
