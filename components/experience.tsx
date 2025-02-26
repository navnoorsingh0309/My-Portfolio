"use client";
import React from "react";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { Timeline } from "./ui/timeline";


const Experience = () => {
  
  const experiences = [
    {
      title: "Aug 2023 - May 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked at iHub-AWaDH, IIT Ropar as a Firmware Intern
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/experience/awadh/1.jpeg"
              alt="AWaDH"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/experience/awadh/2.jpeg"
              alt="AWaDH"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2024 - Apr 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked at Chematico Technologies as a Software Developer Intern.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/experience/chematico technologies/1.jpeg"
              alt="Chematico Technologies"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May 2024 - July 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked at IKSHAMA Centre, IIT Mandi as a Machine Learning Intern.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/experience/ikshma/1.png"
              alt="IKSHMA"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/experience/ikshma/2.png"
              alt="IKSHMA"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      className="flex flex-col justify-center space-y-4 items-center bg-blue-950/50 w-full p-4 px-8 lg:px-60 xl:px-36 pt-[200px]"
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
