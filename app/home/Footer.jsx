"use client";


export const metadata = {
  title: "Footer",
  description: "Footer section of the website",
};
import Image from "next/image";
import { FaDribbble, FaLinkedin } from "react-icons/fa";
import { BsToggleOn } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="text-white">
      <div className="container mx-14 flex justify-between items-center py-8">
            <a href="/Logo" className="flex items-center">
          <Image
            src="/assets/logo.svg" // replace with your logo path
            alt="Website Logo"
            width={120} // adjust size as needed
            height={40}
            priority
          />
        </a>

        <nav className="hidden md:flex space-x-8">
          <a href="/home" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/projects" className="hover:text-gray-400">Work</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </nav>

        <div className="flex space-x-4 items-center text-white text-xl">
          <BsToggleOn
            className="cursor-pointer hover:text-gray-300"
            aria-label="Toggle Theme"
            onClick={() => console.log("Toggle theme")}
          />
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
          >
            <FaDribbble className="cursor-pointer hover:text-pink-500" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="cursor-pointer hover:text-blue-500" />
          </a>
        </div>
      </div>
      <div className="border-t border-[#C8C8C8] w-[1320px] mx-12 mb-8"></div>
    </div>
  );
}
