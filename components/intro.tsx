"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
// We can re-add these hooks later when we build the full navigation system.
import { useSectionInView } from "@/lib/hooks";
// import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  // const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const name = "Hello, I'm Obayd.";
  const title = "I'm a full-stack developer who enjoys building modern sites & apps.";

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* A more modern, glowing image frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 p-1 shadow-2xl shadow-blue-500/30">
              <Image
                src="/profile.png"
                alt="Obayd portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main heading with a typing animation effect */}
      <motion.h1
        className="mb-10 mt-8 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.3 },
          },
        }}
      >
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className={char === "O" || char === "." ? "font-bold" : ""}
          >
            {char}
          </motion.span>
        ))}
        <br />
        {title}
      </motion.h1>

      {/* Redesigned, cleaner buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition shadow-lg"
          // onClick={() => {
          //   setActiveSection("Contact");
          //   setTimeOfLastClick(Date.now());
          // }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white text-gray-800 px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-black/10 shadow-lg"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
        </a>

        <div className="flex gap-4">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 shadow-md"
            href="https://www.linkedin.com/in/oubeidallah-zmander-945185306/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 shadow-md"
            href="https://github.com/Obaydz"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}