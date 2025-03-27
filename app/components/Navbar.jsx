"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  let lastScrollY = 0;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false); // Hide navbar when scrolling down
      } else {
        setVisible(true); // Show navbar when scrolling up
      }

      setScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`${
        scrolled ? "bg-black shadow-md h-[60px]" : "bg-transparent h-[80px]"
      } fixed top-0 left-0 w-full z-10 transition-all ease-in-out`}
    >
      <nav className="max-w-[1366px] mx-auto h-full flex justify-between items-center px-6">
        <ul className="hidden md:flex space-x-8 text-lg font-semibold uppercase text-[11px] font-normal gap-[60px]">
          {["Home", "About"].map((item, index) => (
            <motion.li
              key={index}
              className="relative cursor-pointer"
              initial={{ y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            >
              <Link href={`/${item.toLowerCase()}`} className="hover-effect">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className="relative cursor-pointer"
        >
          <Link href="/Logo" className="font-extrabold text-3xl uppercase hover-effect text-[30px] font-extrabold ">
            <span className="text-[#D0D0D0]">Lo</span>go
          </Link>
        </motion.div>

        <ul className="hidden md:flex space-x-8 text-lg font-semibold uppercase text-[11px] font-normal gap-[60px]">
          {["Projects", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              className="relative cursor-pointer"
              initial={{ y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            >
              <Link href={`/${item.toLowerCase()}`} className="hover-effect">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="md:hidden">
          {menuOpen ? (
            <AiOutlineClose size={30} className="menu-icon" onClick={toggleMenu} aria-label="Close menu" />
          ) : (
            <AiOutlineMenu size={30} className="menu-icon" onClick={toggleMenu} aria-label="Open menu" />
          )}
        </div>

        {menuOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center py-6 space-y-4 md:hidden"
          >
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-lg hover-effect"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
