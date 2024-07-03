"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";

const navItems = ["About", "Projects", "Experience", "Contact"];

export const NavBar = () => {
  const { scrollYProgress } = useScroll();

  // Initially visible
  const [visible, setVisible] = useState(true);

  //   useMotionValueEvent(scrollYProgress, "change", (current) => {
  //     // Check if current is not undefined and is a number
  //     if (typeof current === "number") {
  //       let direction = current! - scrollYProgress.getPrevious()!;

  //       if (scrollYProgress.get() < 0.05) {
  //         // also set true for the initial state
  //         setVisible(true);
  //       } else {
  //         if (direction < 0) {
  //           setVisible(true);
  //         } else {
  //           setVisible(false);
  //         }
  //       }
  //     }
  //   });

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 20 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex flex-row gap-4 sm:gap-8 mx-auto border border-white/10 rounded-lg z-[100] px-8 py-2 sm:py-4 bg-blue-50/5"
      >
        {navItems.map((item: any, index: any) => (
          <Link key={`link=${index}`} href="" className="hover:text-[#ffd700] text-[8px] sm:text-xs md:text-md lg:text-lg">
            {item}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
