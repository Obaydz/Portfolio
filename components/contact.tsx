"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,42rem)] mx-auto px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 dark:text-white/80 mt-[-0.5rem] sm:mt-0 text-lg">
        Reach out directly at{" "}
        <a
          href="mailto:oubeidallahzmander@gmail.com"
          className="text-purple-500 underline hover:text-purple-400 transition-colors"
        >
          oubeidallahzmander@gmail.com
        </a>{" "}
        or use the form below.
      </p>

      <form
        className="mt-10 flex flex-col gap-4 bg-gray-100 dark:bg-gray-900/60 p-6 rounded-2xl shadow-lg dark:shadow-black/30 transition-all"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white/20 dark:placeholder-white/60 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white/20 dark:placeholder-white/60 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <div className="flex justify-center mt-2">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
