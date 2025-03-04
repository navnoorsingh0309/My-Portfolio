"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Circle = {
  xMove: number;
  yMove: number;
  top: number;
  left: number;
  duration:number;
  delay:number;
  size:number;
}

const AnimatedBackground = () => {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const generatedCircles = Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 50 + 20,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
      xMove: Math.random() * 100 - 50,
      yMove: Math.random() * 100 - 50,
    }));
    setCircles(generatedCircles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {circles.map((circle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.2, 1],
              x: [0, circle.xMove, 0],
              y: [0, circle.yMove, 0],
            }}
            transition={{
              duration: circle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: circle.delay,
            }}
            className="absolute rounded-full bg-primary/10"
            style={{
              left: `${circle.left}%`,
              top: `${circle.top}%`,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;
