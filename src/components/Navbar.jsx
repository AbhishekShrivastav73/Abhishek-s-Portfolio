import React from "react";
import { Link } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { LuCode2 } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";
import { LuContact2 } from "react-icons/lu";

export default function Navbar() {
  return (
    <header className="p-4 ">
      <nav className="w-fit  py-4 mt-2 px-6 md:w-fit text-xl md:gap-10 mx-auto flex items-center justify-center md:justify-evenly gap-10  rounded-full bg-zinc-900">
        <Link to="/" className="text-[#F46C38]">
          <LuHome />
        </Link>
        <Link to="/">
          <LuCode2 />
        </Link>
        <Link to="/">
          <VscTools />
        </Link>
        <Link to="/">
          <LuContact2 />
        </Link>
      </nav>
    </header>
  );
}
