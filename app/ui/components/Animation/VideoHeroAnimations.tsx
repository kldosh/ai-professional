"use client";

import { motion } from "framer-motion";
import React from "react";

export function SaveTheDayTitle() {
  return (
    <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
      AI Professional is here to{" "}
      <motion.span
        className="text-ai-blue inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1, type: "spring", stiffness: 50 }}
      >
        Save the Day.
      </motion.span>
    </h1>
  );
}

export function SaveTheDayText() {
  return (
    <p className="text-lg font-normal text-black lg:text-xl">
      From the initial site survey all the way through implementation{" "}
      <motion.span
        className="text-ai-blue font-extrabold inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.25, type: "spring", stiffness: 50 }}
      >
        and beyond
      </motion.span>
      , we&apos;re here to help you through your AV, security camera, phone, or
      network system investment. Our{" "}
      <motion.span
        className="text-ai-blue font-extrabold inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.5, type: "spring", stiffness: 50 }}
      >
        experience
      </motion.span>{" "}
      in the industry ensures that we use only the best, most reliable products,
      with ease of use in mind, to ensure years of use for your{" "}
      <motion.span
        className="text-ai-blue font-extrabold inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.75, type: "spring", stiffness: 50 }}
      >
        family or business
      </motion.span>
      .
    </p>
  );
}
