"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const variants = {
  offscreen: { y: 100 },
  onscreen: {
    y: 0,
    transition: {
      ease: "easeOut",
    },
  },
};

export function ServicesTitle() {
  return (
    <motion.h1
      className="text-4xl font-extrabold tracking-tight leading-none text-ai-blue md:text-5xl lg:text-5xl"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
    >
      Commercial/Residential Services
    </motion.h1>
  );
}

export function ServicesText() {
  return (
    <motion.ul
      className="text-lg list-disc list-inside space-y-2 font-normal lg:text-xl"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
    >
      <li>Audio/Video</li>
      <li>Outdoor Audio/Video</li>
      <li>Theatre Rooms</li>
      <li>Whole House WiFi</li>
      <li>Phone Systems</li>
      <li>Smart Home</li>
      <li>Structured Wiring</li>
      <li>Wired/Wireless Data Networks and Infrastructure</li>
      <li>Surveillance Camera Systems</li>
      <li>Access Control</li>
      <li>Commercial Cell Phone Booster Systems</li>
    </motion.ul>
  );
}

export function ServicesImage() {
  return (
    <motion.div
      className="w-1/2"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
    >
      <Image
        className="rounded-2xl"
        src={"/Local_system_viewing.jpg"}
        alt=""
        width={3456}
        height={2042}
      ></Image>
    </motion.div>
  );
}
