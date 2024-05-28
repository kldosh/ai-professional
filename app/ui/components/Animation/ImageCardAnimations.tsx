"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const variants = {
  offscreen: { y: 100 },
  onscreen: {
    y: 0,
    transition: {
      ease: "easeOut",
    },
  },
};

export function DIYTitle() {
  return (
    <h1 className="text-4xl font-extrabold tracking-tight text-center leading-none text-white md:text-6xl lg:text-6xl">
      See Us in <span className="text-ai-blue">Action</span>
    </h1>
  );
}

export function DIYText() {
  return (
    <div>
      <p className="text-lg tracking-tight px-10 text-center lg:text-xl">
        Discover the quality and expertise we bring to every project through our
        video showcase. From advanced AV setups and robust security camera
        installations to seamless communication systems and reliable network
        infrastructures, our portfolio highlights our commitment to excellence.
        Watch how we&apos;ve transformed spaces and provided innovative
        solutions tailored to meet the unique needs of each client. See the
        results of our dedication to using the best products and delivering
        outstanding service in action.
      </p>
    </div>
  );
}

export function DIYImage() {
  return (
    <motion.div
      className="w-1/2"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
    >
      <Image
        className="rounded-2xl"
        src={"/DIY.png"}
        alt=""
        width={1120}
        height={888}
      ></Image>
    </motion.div>
  );
}

export function DIYLink() {
  return (
    <div className="flex justify-center">
      <Link
        href="/diy"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
          Explore DIY Solutions
        </span>
      </Link>
    </div>
  );
}
