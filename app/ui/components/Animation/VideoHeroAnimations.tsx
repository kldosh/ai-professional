"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

export function SolutionsTitle() {
  return (
    <h1 className="text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl">
      <motion.span
        className="text-ai-blue inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.75, type: "spring", stiffness: 50 }}
      >
        Comprehensive Solutions
      </motion.span>{" "}
      for AV, Security, Communication and Network Systems
    </h1>
  );
}

export function AbsoluteInstallationsTitle() {
  return (
    <h1 className="text-3xl text text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl">
      AI Professional Stands for{" "}
      <motion.span
        className="text-ai-blue inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.75, type: "spring", stiffness: 50 }}
      >
        Absolute Installations Professional.
      </motion.span>{" "}
    </h1>
  );
}

export function SolutionsText() {
  return (
    <p className="text-lg font-normal tracking-tight pr-10 text-black lg:text-xl">
      From the initial site survey all the way through implementation{" "}
      <motion.span
        className="text-ai-blue font-extrabold inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1, type: "spring", stiffness: 50 }}
      >
        and beyond
      </motion.span>
      , we&apos;re here to help you through your AV, security camera, phone, or
      network system investment. Our{" "}
      <motion.span
        className="text-ai-blue font-extrabold inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.25, type: "spring", stiffness: 50 }}
      >
        experience
      </motion.span>{" "}
      in the industry ensures that we use only the best, most reliable products,
      with ease of use in mind, to ensure years of use for your{" "}
      <motion.span
        className="text-ai-blue font-extrabold inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.5, type: "spring", stiffness: 50 }}
      >
        family or business.
      </motion.span>
    </p>
  );
}

export function AbsoluteInstallationsText() {
  return (
    <p className="text-lg font-normal pr-5 tracking-tight text-black lg:text-xl">
      That&apos;s all that needs to be said, but we will{" "}
      <motion.span
        className="text-ai-blue font-extrabold inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1, type: "spring", stiffness: 50 }}
      >
        say a little more.
      </motion.span>{" "}
      We take pride in delivering an easy to use AV system, and even more pride
      in how we leave your house or business when finished. Our techs will
      always clean up any mess so it is{" "}
      <motion.span
        className="text-ai-blue font-extrabold inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1.25, type: "spring", stiffness: 50 }}
      >
        like we were never there.
      </motion.span>
    </p>
  );
}

export function ContactUsLink() {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1.5, type: "spring", stiffness: 50 }}
    >
      <Link
        href="/contact-us"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-amber-50 rounded-md group-hover:bg-opacity-0">
          Book a Consultation Today!
        </span>
      </Link>
    </motion.div>
  );
}

export function ServicesLink() {
  return (
    <motion.div
      className="flex justify-center gap-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1.75, type: "spring", stiffness: 50 }}
    >
      <Link
        href="/commercial-services"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-amber-50 rounded-md group-hover:bg-opacity-0">
          Commercial Services
        </span>
      </Link>
      <Link
        href="/residential-services"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-amber-50 rounded-md group-hover:bg-opacity-0">
          Residential Services
        </span>
      </Link>
    </motion.div>
  );
}
