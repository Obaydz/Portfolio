"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.04 * index,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-5xl mx-auto scroll-mt-28 text-center sm:mb-40 px-4"
    >
      <SectionHeading>My Skills</SectionHeading>

      <ul className="flex flex-wrap justify-center gap-4 mt-10">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="px-6 py-3 rounded-xl text-sm sm:text-base font-medium text-white 
                       bg-gradient-to-r from-purple-500/70 to-pink-500/70 
                       dark:from-purple-600/40 dark:to-pink-600/40 
                       shadow-md shadow-purple-500/20 
                       hover:shadow-lg hover:shadow-pink-500/30 
                       backdrop-blur-md border border-white/10 
                       transition-transform duration-300 hover:scale-105"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
