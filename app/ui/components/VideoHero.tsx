"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

interface Props {
  title: React.ReactElement;
  text: React.ReactElement;
  src: string;
}

export default function VideoHero({ title, text, src }: Props) {
  return (
    <div className="h-[200vh] relative">
      <div className="sticky top-1/2 transform -translate-y-1/2">
        <motion.div
          className="bg-amber-50 h-auto mx-10 rounded-2xl mb-10"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-evenly">
            <video
              className="w-1/2 m-10 rounded-2xl"
              src={src}
              controls
              preload="metadata"
            ></video>
            <div className="flex flex-col justify-center gap-16">
              {title}
              {text}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
