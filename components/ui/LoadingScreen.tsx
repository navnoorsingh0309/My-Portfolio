"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen(loaded: {loaded: boolean}) {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }))
    setParticles(newParticles);
  }, [])

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY
      },
    },
  };
  

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  return (
    <AnimatePresence>
      {!loaded.loaded && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800"
          variants={containerVariants}
          exit="exit"
        >
          {particles.map((particle, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              animate={{
                x: [`${particle.x}%`, `${particle.x + (Math.random() * 10 - 5)}%`, `${particle.x}%`],
                y: [`${particle.y}%`, `${particle.y + (Math.random() * 10 - 5)}%`, `${particle.y}%`],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
            />
          ))}

          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                width: "200px",
                height: "200px",
                transform: "translate(-50%, -50%)",
              }}
            />

            <motion.svg width="120" height="120" viewBox="0 0 120 120" className="relative z-10">
              <motion.path
                d="M30 90V30"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                fill="none"
              />

              <motion.path
                d="M30 30L90 90"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  ...pathVariants.visible.transition,
                  delay: 0.5,
                }}
                fill="none"
              />

              <motion.path
                d="M90 90V30"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  ...pathVariants.visible.transition,
                  delay: 1,
                }}
                fill="none"
              />
            </motion.svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
