"use client";
import React, { useEffect, useState } from "react";
import "react-vertical-timeline-component/style.min.css";
import { Timeline } from "../ui/timeline";
import { ExperienceSchema } from "@/models/schema";

interface props {
  loaded: boolean;
  setLoaded: (load: boolean) => void;
}

const Experience: React.FC<props> = ({ loaded, setLoaded }) => {
  const [expData, setExpData] = useState<ExperienceSchema[]>([]);
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch(`/api/experience`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setExpData(data.experience);
        setLoaded(true);
      } catch (err) {
        console.error("Error fetching inventory:", err);
      }
    };
    fetchExperiences();
  }, []);
  const experiences = expData.map((exp: ExperienceSchema) => ({
    title: exp.timeline,
    content: (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          {exp.icon && (
          <img src={`https://utfs.io/f/${exp.icon}`} alt="Logo" className="h-32 w-32" /> )}
          <h2 className="text-lg font-semibold">{exp.title}</h2>
        </div>

        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal">
            {exp.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {exp.image?.map((src, index) => (
            <img
              key={index}
              src={`https://utfs.io/f/${src}`}
              alt="Experience"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          ))}
        </div>
      </div>
    ),
  }));
  if (!loaded)
    return<></>

  return (
    <section
      className="flex flex-col justify-center space-y-4 items-center w-full p-4 px-8 lg:px-60 xl:px-36 pt-[200px]"
      id="experience"
    >
      <h1
        className="text-4xl lg:text-7xl flex animate-bounce"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        My &nbsp; <p className="text-[#ffd700]">Experience</p>
      </h1>
      <div className="py-16 text-center md:text-left">
        <h1
          className="text-3xl lg:text-5xl flex"
          style={{ fontFamily: "Stylish, sans-serif" }}
        >
          My Work &nbsp; <p className="text-[#ffd700]">Experience</p>
        </h1>
        <div className="mt-12 flex justify-center">
          <Timeline data={experiences} />
        </div>
      </div>
      <hr className="border-slate-200" />{" "}
    </section>
  );
};

export default Experience;
