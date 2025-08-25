"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      {/* Background container */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full 
        border border-white/30 bg-white/60 shadow-lg shadow-black/[0.03] 
        backdrop-blur-xl sm:top-6 sm:h-[3.5rem] sm:w-[38rem] sm:rounded-full
        dark:bg-gray-900/70 dark:border-white/10"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Navigation Desktop */}
      <nav className="hidden sm:flex fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] sm:top-6 sm:h-[3.5rem] items-center justify-center">
        <ul
          className="flex items-center justify-center w-[22rem] flex-wrap gap-y-1 text-[0.95rem] font-medium 
          text-gray-600 dark:text-gray-400 sm:w-[initial] sm:flex-nowrap sm:gap-6"
        >
          {links.map((link, i) => (
            <motion.li
              key={link.hash}
              className="flex items-center justify-center relative"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
            >
              <Link
                className={clsx(
                  "relative flex items-center justify-center px-3 py-2 transition-all duration-300 rounded-md",
                  "hover:text-gray-950 dark:hover:text-gray-200",
                  activeSection === link.name &&
                    "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {/* Active Section Blob */}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full 
                      bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                      dark:from-purple-400/25 dark:to-pink-400/25 
                      backdrop-blur-md"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sm:hidden fixed top-0 left-0 w-full flex items-center justify-between px-4 h-[4.5rem] bg-white/60 border-b border-white/20 backdrop-blur-xl dark:bg-gray-900/70 dark:border-white/10">
        <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Obayd
        </div>

        {/* Hamburger / Close Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-700 dark:text-gray-300 focus:outline-none"
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Mobile Menu */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={clsx(
            "absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-white/20 dark:border-white/10 flex flex-col items-center gap-4 py-4",
            mobileOpen ? "flex" : "hidden"
          )}
        >
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                className={clsx(
                  "px-4 py-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-purple-800 transition",
                  activeSection === link.name &&
                    "font-semibold text-purple-600 dark:text-purple-400"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setMobileOpen(false); // close menu on click
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
}
