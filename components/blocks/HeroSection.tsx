"use client";
import React, { useEffect, useState } from "react";
import { FlipWords } from "../ui/flip-words";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { CarouselSchema } from "@/models/schema";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

interface props {
  loaded: boolean;
  setLoaded: (load: boolean) => void;
};

const HeroSection:React.FC<props> = ({loaded, setLoaded}) => {
  const [carouselData, setCarouselData] = useState<CarouselSchema[]>([]);
  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        const response = await fetch(`/api/carousel`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCarouselData(data.carousel);
        setLoaded(true);
      } catch (err) {
        console.error("Error fetching inventory:", err);
      }
    };
    fetchCarousel();
  }, []);
  const words = [
    "A Robotics Enthusiast",
    "A Software Developer",
    "A Business Enthusiast",
    "Feel Free to contact :)",
  ];
  if (!loaded)
    return<></>

  return (
    <div className="grid grid-cols-1 w-full h-fit pb-[100px] pt-[50px] md:grid-cols-2">
      <div className="flex justify-center">
        <motion.div
          className="grid grid-rows-2 gap-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="row-span-1 flex flex-col space-y-2 md:space-y-4 justify-end items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
            <motion.h1
              className="text-[#FFD700] tracking-tight"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Hi, I am Navnoor Singh 👋
            </motion.h1>
            <FlipWords words={words} />
          </div>

          <motion.div
            className="flex flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {[
              { href: "https://github.com/navnoorsingh0309", icon: Github },
              {
                href: "https://www.linkedin.com/in/navnoor-singh-bal-4a7611256/",
                icon: Linkedin,
              },
              { href: "mailto:nbbal2003@gmail.com", icon: Mail },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-8 h-8 md:w-10 md:h-10" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="col-span-1">
        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center">
            <Carousel className="w-[400px]">
              <CarouselContent>
                {carouselData.map((item: CarouselSchema) => (
                  <CarouselItem key={item._id}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="p-1"
                    >
                      <Card>
                        <CardContent className="flex-col aspect-square items-center justify-center p-6">
                          <motion.img
                            src={`https://utfs.io/f/${item.image}`}
                            className="object-cover w-auto h-full rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          />
                          <motion.h1
                            className="text-center font-bold text-2xl mt-4 text-white/90"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            {item.title}
                          </motion.h1>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
