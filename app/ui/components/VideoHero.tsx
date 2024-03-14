"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  title: React.ReactElement;
  text: React.ReactElement;
  link: React.ReactElement;
  src: string;
  posterSrc: string;
}

export default function VideoHero({
  title,
  text,
  link,
  src,
  posterSrc,
}: Props) {
  return (
    <div className="h-[200vh] relative">
      <div className="sticky top-1/2 transform -translate-y-1/3">
        <motion.div
          className="bg-amber-50 h-auto mx-10 rounded-2xl shadow-[0px_0px_20px_10px] shadow-ai-blue"
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: -20 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-evenly">
            <video
              className="w-1/2 m-10 rounded-2xl aspect-video"
              src={src}
              poster={posterSrc}
              controls
              preload="metadata"
            ></video>
            <div className="flex flex-col justify-evenly">
              {title}
              {text}
              {link}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
