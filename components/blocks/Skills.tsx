"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "C",
    imageUrl: "/stack/C.png",
  },
  {
    name: "C++",
    imageUrl: "/stack/C++.png",
  },
  {
    name: "Java",
    imageUrl: "/stack/Java.png",
  },
  {
    name: "Python",
    imageUrl: "/stack/python.png",
  },
  {
    name: "Sciket-Learn",
    imageUrl: "/stack/sklearn.png",
  },
  {
    name: "Tensorflow",
    imageUrl: "/stack/tensor-flow.png",
  },
  {
    name: "MNE-Python",
    imageUrl: "/stack/mne.png",
  },
  {
    name: "Perl",
    imageUrl: "/stack/perl.png",
  },
  {
    name: "C#",
    imageUrl: "/stack/C-sharp.png",
  },
  {
    name: "Go",
    imageUrl: "/stack/Go.png",
  },
  {
    name: "Kotlin",
    imageUrl: "/stack/kotlin.png",
  },
  {
    name: "Rust",
    imageUrl: "/stack/Rust.png",
  },
  {
    name: "Verilog",
    imageUrl: "/stack/Verilog.png",
  },
  {
    name: "HTML",
    imageUrl: "/stack/html.png",
  },
  {
    name: "CSS",
    imageUrl: "/stack/CSS.png",
  },
  {
    name: "Javscript",
    imageUrl: "/stack/js.png",
  },
  {
    name: "PHP",
    imageUrl: "/stack/php.png",
  },
  {
    name: "Tailwind",
    imageUrl: "/stack/tailwind.png",
  },
  {
    name: "Typescript",
    imageUrl: "/stack/ts.png",
  },
  {
    name: "ReactJs",
    imageUrl: "/stack/react.png",
  },
  {
    name: "Next Js",
    imageUrl: "/stack/nextjs.png",
  },
  {
    name: "Node Js",
    imageUrl: "/stack/nodejs.png",
  },
  {
    name: "Express Js",
    imageUrl: "/stack/expressjs.png",
  },
  {
    name: "Flask",
    imageUrl: "/stack/flask.png",
  },
  {
    name: "SQL",
    imageUrl: "/stack/sql.png",
  },
  {
    name: "Mongo DB",
    imageUrl: "/stack/mongo.jpg",
  },
  {
    name: "Appwrite",
    imageUrl: "/stack/appwrite.png",
  },
  {
    name: "Amazon Web Services",
    imageUrl: "/stack/aws.png",
  },
  {
    name: "Docker",
    imageUrl: "/stack/docker.png",
  },
  {
    name: "Kubernetes",
    imageUrl: "/stack/kubernetes.png",
  },
];

interface props {
  loaded: boolean;
  setLoaded: (load: boolean) => void;
};

const TechStack:React.FC<props> = ({loaded, setLoaded}) => {
  setLoaded(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
  if (!loaded)
    return<></>

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
            key={skill.name}
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
                src={skill.imageUrl || "/placeholder.svg"}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain relative z-10"
                whileHover={{
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium text-slate-700 dark:text-slate-300 w-full text-center"
              initial={{ opacity: 0, y: -10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {skill.name}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default TechStack;