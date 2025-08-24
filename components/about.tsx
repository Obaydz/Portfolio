"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="bg-gray-800/50 p-8 rounded-lg border border-white/10 shadow-lg backdrop-blur-sm">
  <p className="mb-4 text-gray-300">
    Hi, I’m <span className="font-medium text-white">Obayd</span>, a passionate full-stack developer. I enjoy learning new technologies and building projects that solve real problems. My main tools include <span className="font-medium text-white">React, Next.js, Node.js, PHP, Python, and C++</span>.
  </p>

  <p className="mb-4 text-gray-300">
    I love tackling <span className="italic text-gray-200">challenging problems</span> and creating systems that work efficiently. I also enjoy exploring creative ideas through personal projects and experiments.
  </p>

  <p className="mb-4 text-gray-300">
    I’m always learning new skills and techniques, from web development to game design, and I’m looking forward to opportunities where I can contribute, collaborate, and grow as a developer.
  </p>

  <p className="text-gray-400 text-sm">
    Outside of coding, I enjoy video games, creative writing, music, and exploring ideas that inspire me to think differently.
  </p>
</div>

    </section>
  );
}
