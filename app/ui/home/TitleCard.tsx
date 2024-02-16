"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function TitleCard() {
  const hidden = { opacity: 0, y: 100 };
  const visible = { opacity: 0.99, y: 0 };
  const first = { duration: 1 };
  const second = { duration: 1, delay: 0.5 };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const firstX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const secondX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div className="h-[200vh] p-5 relative" ref={targetRef}>
      <div className="sticky top-0 h-screen">
        <div className="h-full flex justify-center flex-col overflow-hidden">
          <motion.p
            className="text-super-size pl-10"
            initial={hidden}
            animate={visible}
            transition={first}
            style={{ x: firstX }}
          >
            Welcome to
          </motion.p>
          <motion.p
            className="text-super-size text-ai-blue flex justify-end pr-10"
            initial={hidden}
            animate={visible}
            transition={second}
            style={{ x: secondX }}
          >
            AI Professional.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
