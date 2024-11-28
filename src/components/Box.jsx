import React from "react";
import { GiPodiumWinner } from "react-icons/gi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { VscFileSubmodule } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";

import { GrProjects } from "react-icons/gr";

export default function Box({ bgcolor, color, title, description }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgcolor})`,
        overflow: "hidden",
        backgroundPosition : 'right',
        WebkitBackdropFilter : 'blur(2px)'
      }}
      className={` ${color} w-full relative p-4 flex flex-col justify-center rounded-2xl md:w-fit h-52`}
    >

       
      {title === "My Projects" && <VscFileSubmodule className="text-3xl my-2"/>}
      {title === "My Achievements" && <GiPodiumWinner className="text-3xl my-2" />}
      {title === "Tech Stack" && <FaCode className="text-3xl my-2" />}
      <h2 className="text-4xl font-bold tracking-tight italic">{title}</h2>
      <p className="text-sm tracking-tighter">{description}</p>
      <div className="absolute top-5 right-5">
        <FaArrowUpRightFromSquare />
      </div>
    </div>
  );
}
