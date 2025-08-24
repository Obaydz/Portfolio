"use client";

import React from "react";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

// Your brightest projects
const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce website featuring product management, shopping cart, Stripe integration, and admin dashboard. Built using PHP, Symfony, and Tailwind.",
    tags: ["PHP", "Symfony", "Tailwind", "MySQL", "Redux"],
    imageUrl: "/e-commerce.png",
  },
  {
    title: "AI Chatbot",
    description:
      "A GPU-based chatbot using Python, designed to remember conversation context and respond intelligently. Implements NLP and ML techniques for personalized interactions.",
    tags: ["Python", "Machine Learning", "NLP", "Chatbot"],
    imageUrl: "/ai.png",
  },
];

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const { ref } = useSectionInView("Projects");

  return (
    <motion.div ref={ref} className="group relative mb-12">
      <section className="bg-gray-900/60 border border-white/10 rounded-2xl overflow-hidden shadow-xl backdrop-blur-md transition hover:shadow-purple-500/20 hover:-translate-y-1 duration-300 max-w-5xl mx-auto flex flex-col sm:flex-row items-center">
        <div className="p-6 sm:w-1/2 flex flex-col justify-between h-full">
          <h3 className="text-2xl font-semibold text-white group-hover:text-purple-400 transition">
            {title}
          </h3>
          <p className="mt-3 text-gray-300 leading-relaxed">{description}</p>
          <ul className="flex flex-wrap mt-5 gap-2">
            {tags.map((tag, index) => (
              <motion.li
                whileHover={{ scale: 1.08 }}
                className="bg-gradient-to-r from-purple-500/70 to-pink-500/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white rounded-full shadow-md"
                key={index}
              >
                {tag}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="relative sm:w-1/2">
          <Image
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            quality={95}
            width={600}
            height={400}
            className="rounded-t-lg sm:rounded-none sm:rounded-r-lg shadow-lg transition-transform duration-500 group-hover:scale-[1.05] group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg pointer-events-none" />
        </div>
      </section>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28 px-4">
      <SectionHeading>My Brightest Projects</SectionHeading>
      <div className="space-y-16">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
