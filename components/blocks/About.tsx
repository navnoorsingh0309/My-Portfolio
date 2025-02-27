"use client";
import React, { useEffect, useState } from "react";
import { WobbleCard } from "../ui/wobble-cards";
import Image from "next/image";
import { AboutSchema } from "@/models/schema";
import { motion } from "framer-motion";

interface props {
  loaded: boolean;
  setLoaded: (load: boolean) => void;
};

const About:React.FC<props> = ({loaded, setLoaded}) => {
  const [data1, setData1] = useState<AboutSchema>();
  const [data2, setData2] = useState<AboutSchema>();
  const [data3, setData3] = useState<AboutSchema>();
  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        const response = await fetch(`/api/about`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        data.about.map((item: AboutSchema, index: number) => {
          if (index === 0) setData1(item);
          else if (index === 1) setData2(item);
          else if (index === 2) setData3(item);
          setLoaded(true);
        });
      } catch (err) {
        console.error("Error fetching inventory:", err);
      }
    };
    fetchAboutMe();
  }, []);
  if (!loaded)
    return<></>
  return (
    <motion.div
      className="flex flex-col justify-center space-y-4 items-center w-full p-4 px-[30px] sm:px-[70px]"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex items-center gap-2 text-4xl lg:text-7xl"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          About
        </motion.span>
        <motion.span
          className="text-[#ffd700]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Me
        </motion.span>
      </motion.div>

      <div className="grid grid-rows-2 gap-8 mx-auto w-full max-w-7xl mt-12">
        <div className="grid grid-cols-1 gap-8 row-span-1 lg:grid-cols-3">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <WobbleCard
              containerClassName="col-span-1 bg-gradient-to-br from-pink-800 to-purple-900 lg:h-[400px] rounded-2xl shadow-xl"
              className="p-6"
            >
              <div>
                <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-tight text-white">
                  {data1?.type}
                </h2>
                <p className="mt-4 text-sm xl:text-xl text-neutral-200 w-full text-justify leading-relaxed">
                  {data1?.text}
                </p>
              </div>
            </WobbleCard>
          </motion.div>

          <motion.div
            className="col-span-1 lg:col-span-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WobbleCard
              containerClassName="bg-gradient-to-br from-indigo-900 to-blue-800 sm:h-[450px] md:h-[350px] lg:h-[400px] rounded-2xl shadow-xl"
              className="p-6"
            >
              <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="col-span-1 xl:col-span-2">
                  <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-tight text-white">
                    {data2?.type}
                  </h2>
                  <p className="mt-4 text-sm xl:text-xl text-neutral-200 text-justify leading-relaxed">
                    {data2?.text}
                  </p>
                </div>
                <motion.div
                  className="col-span-1 flex justify-end items-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="relative w-full h-[300px] lg:h-[350px] overflow-hidden rounded-2xl">
                    <Image
                      src="/robotics.jpg"
                      fill
                      alt="Robotics"
                      className="object-cover transform hover:scale-110 transition-transform duration-500"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </motion.div>
              </div>
            </WobbleCard>
          </motion.div>
        </div>

        <motion.div
          className="row-span-1"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <WobbleCard
            containerClassName="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl shadow-xl"
            className="p-6"
          >
            <div>
              <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-tight text-white">
                {data3?.type}
              </h2>
              <p className="mt-4 text-sm xl:text-xl text-neutral-200 w-full text-justify leading-relaxed">
                {data3?.text}
              </p>
            </div>
          </WobbleCard>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
