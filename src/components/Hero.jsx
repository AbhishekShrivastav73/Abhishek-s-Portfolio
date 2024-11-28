import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


export default function Hero() {
  return (
    <div className="w-full  md:w-[80%] md:px-12  py-8 text-center ">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">
        Hi👋, I'm <span className="text-[#F46C38]">Abhishek Shrivastav.</span>
      </h1>
      <h1 className="md:text-[10vw] text-5xl font-black leading-10">
        FULL-STACK
      </h1>
      <h1 className="md:text-[10vw] text-5xl font-black  text-zinc-600 leading-tight">
        DEVELOPER.
      </h1>
      <p className="text-md w-full text-zinc-300  md:w-3/4 mx-auto">
        Passionate about creating intuitive and engaging user experiences.
        Specialize in transforming ideas into beautifully crafted products.
      </p>
      <button className="bg-[#58C2F9] my-4 px-6 py-3 text-center rounded-full font-semibold ">Explore Projects <FaArrowUpRightFromSquare className="inline"/></button>
    </div>
  );
}
