import React from "react";
import { GiPodiumWinner } from "react-icons/gi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { VscFileSubmodule } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";

import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Box({ data }) {
  return (
    <Link to={data.to}
      style={{
        backgroundImage: `url(${data.bgcolor})`,
        overflow: "hidden",
        backgroundPosition: "right",
        WebkitBackdropFilter: "blur(2px)",
      }}
      className={` ${data.color} w-full relative p-4 flex flex-col justify-center rounded-2xl md:w-fit h-52`}
    >
      {data.title === "My Projects" && (
        <VscFileSubmodule className="text-3xl my-2" />
      )}
      {data.title === "My Achievements" && (
        <GiPodiumWinner className="text-3xl my-2" />
      )}
      {data.title === "Tech Stack" && <FaCode className="text-3xl my-2" />}
      <h2 className="text-4xl font-bold tracking-tight italic">{data.title}</h2>
      <p className="text-sm tracking-tighter">{data.description}</p>
      <div className="absolute top-5 right-5">
        <FaArrowUpRightFromSquare />
      </div>
    </Link>
  );
}
