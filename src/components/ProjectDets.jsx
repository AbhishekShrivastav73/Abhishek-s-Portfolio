import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ProjectDets({ data, direction }) {
  return (
    <div
      className={`w-full flex flex-col ${direction} items-center gap-3 md:gap-8`}
    >
      <div className="w-full">
        <img className="w-full rounded-lg" src={data.img} alt="" />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-2xl tracking-wider md:text-4xl font-semibold">
              {data.title}
            </h1>
            <p className="tracking-tighter text-zinc-500">{data.development}</p>
          </div>
          <p className="text-xs md:w-[70%] font-thin">{data.description}</p>
          <div className="flex items-center gap-4 flex-wrap">
            <h4 className="text-sm md:text-base font-semibold">
              Technologies Used :{" "}
            </h4>
            {data?.techStack?.map((tech, idx) => {
              return (
                <div key={idx} className="text-sm md:text-base font-semibold">
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between md:justify-normal md:flex-row mt-4 md:items-center gap-4">
          <Link className="flex items-center text-sm gap-3 px-4 py-2 border-2 rounded-full">
            {" "}
            <FaGithub className="text-2xl" /> GitHub Repository
          </Link>
          <Link className="flex text-sm text-[#F46C38] font-semibold items-center gap-2">
            Live Preview <FaArrowUpRightFromSquare />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}