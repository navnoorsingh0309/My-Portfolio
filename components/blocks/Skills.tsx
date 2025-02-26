"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Skills } from "@/models/schema";

interface props {
  loaded: boolean;
  setLoaded: (load: boolean) => void;
}

const TechStack: React.FC<props> = ({ loaded, setLoaded }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [skills, setSkills] = useState<Skills[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const fetchSkills = async () => {
      try {
        const response = await fetch(`/api/stack`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSkills(data.stack);
        setLoaded(true);
      } catch (err) {
        console.error("Error fetching inventory:", err);
      }
    };
    fetchSkills();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Only render animations on client-side
  if (!isMounted) {
    return null;
  }
  if (!loaded) return <></>;

  return (
    <motion.div
      className="w-full text-center md:text-left pt-10 pb-16 p-4 px-[30px] sm:px-[70px] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={titleVariants} className="relative">
        <h1
          className="text-3xl lg:text-5xl flex flex-col md:flex-row items-center justify-center md:justify-start font-bold"
          style={{ fontFamily: "Stylish, sans-serif" }}
        >
          My Tech &nbsp; <span className="text-[#ffd700]">Stack</span>
        </h1>
        <motion.p
          className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto md:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Technologies and tools I've worked with and enjoy using
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-16 flex flex-wrap justify-center md:justify-start gap-8 md:gap-10"
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card relative"
            key={skill.title}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex justify-center items-center bg-white dark:bg-slate-800 shadow-lg relative overflow-hidden`}
              whileHover={{
                boxShadow: `0 0 20px 2px 0061ff}`,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="absolute inset-0 opacity-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                style={{
                  background: `linear-gradient(135deg, #0061ff 0%, transparent 80%)`,
                }}
              />

              <motion.img
                src={`https://utfs.io/f/${skill.image}`}
                alt={skill.title}
                className="w-1/2 h-1/2 object-contain relative z-10"
                whileHover={{
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TechStack;
