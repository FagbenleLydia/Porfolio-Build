import React from "react";
import { FaDribbble, FaLinkedin } from "react-icons/fa";
import { BsToggleOn } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center py-8">
          <a href="/Logo" className="text-2xl font-bold text-gray-300">LOGO</a>

          <nav className="hidden md:flex space-x-6">
            <a href="/home" className="hover:text-gray-400">Home</a>
            <a href="" className="hover:text-gray-400">About</a>
            <a href="/projects" className="hover:text-gray-400">Work</a>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
          </nav>

          <div className="flex space-x-4 items-center">
            <BsToggleOn className="text-white text-xl cursor-pointer" />
            <FaDribbble className="text-white text-xl cursor-pointer" />
            <FaLinkedin className="text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="border-t border-[#C8C8C8] mb-4"></div>
    </div>
  );
}

