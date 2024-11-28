import React from "react";
import abhiProfile from "../../public/abhiProfile.jpg";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";

export default function IdCard() {
  return (
    <div className="w-full relative  flex flex-col items-center justify-center rounded-2xl px-8 py-10 bg-[#a8431c] text-zinc-950 shadow-lg">
      <img
        className="w-[95%] mx-auto rounded-xl my-4"
        src={abhiProfile}
        alt="Abhishek Shrivastav"
      />
      <div className="w-full flex items-center gap-3">
        <h1 className="font-black text-2xl text-zinc-50 ">ABHISHEK SHRIVASTAV</h1>
      </div>

      <div className="w-full flex flex-col gap-4 mt-4">
        <div className="flex gap-5 text-2xl">
          <FaGithub />
          <FaTwitter />
          <FaLinkedinIn />
          <BsEnvelope />
          <FaPhone />
        </div>
        <div className="text-lg">
          <p>abhishek.shrivastav@example.com</p>
          <p>+91 1234567890</p>
        </div>
      </div>
    </div>
  );
}
