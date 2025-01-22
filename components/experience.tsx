"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import { Timeline } from "./ui/timeline";

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

const experiences = [
  {
    company_name: "iHub-AWaDH, IIT Ropar",
    date: "Aug 2023 - May 2024",
    icon: "/experience/awadh.jpeg",
    title: "Research Intern",
    iconBg: "#a2d2ff",
    points: [
      "Implemented LE Coded PHY to enable long range feature of BLE along with extended advertisement.",
      "Worked on efficient increment for BLE packet over long range transmission using various algorithms and techniques.",
    ],
  },
  {
    company_name: "Chematico Technologies",
    date: "Mar 2024 - Jun 2024",
    icon: "/experience/chematico.jpeg",
    title: "Software Development Intern",
    iconBg: "#a2d2ff",
    points: [
      "Developed a C# application to integrate the Emstat Pico module, aiming to facilitate data acquisition for voltammetery.",
      "Software platform generates plots fo potential and employs various analytical techniques to ensure comprehensive analysis.",
    ],
  },
  {
    company_name: "IKSHAMA Centre, IIT Mandi",
    date: "May 2024 - Present",
    icon: "/experience/ikshma.jpg",
    title: "Research Intern",
    iconBg: "#a2d2ff",
    points: [
      "Analysing and applying machine learning algorithms on EEG with the help of python libraries like MNE and using sLoreta software.",
      "I am current engaged in research concerning connectivity analysis and source localization on mediation EEG data.",
    ],
  },
];

const Experience = () => {

  // Experience Data
  const experiences1 = [
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
            Worked at IKSHAMA Centre, IIT Mandi as a Machine Learning Intern.
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
            Worked at Chematico Technologies as a Software Developer Intern.
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
      className="flex flex-col justify-center space-y-4 items-center bg-blue-950/50 w-full p-4 px-8 lg:px-60 xl:px-72 pt-[200px]"
      id="experience"
    >
      <h1
        className="text-4xl lg:text-7xl flex animate-bounce"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        My &nbsp; <p className="text-[#ffd700]">Experience</p>
      </h1>
      {/* Tech Stack */}
      <div className="w-full text-center md:text-left pt-10">
        <h1
          className="text-3xl lg:text-5xl flex"
          style={{ fontFamily: "Stylish, sans-serif" }}
        >
          My Tech &nbsp; <p className="text-[#ffd700]">Stack</p>
        </h1>
        <div className="mt-16 flex flex-wrap justify-center gap-10 md:gap-24">
          {skills.map((skill) => (
            <div
              className="block-container w-14 h-14 md:w-20 md:h-20"
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Experience */}
      <div className="py-16 text-center md:text-left">
        <h1
          className="text-3xl lg:text-5xl flex"
          style={{ fontFamily: "Stylish, sans-serif" }}
        >
          My Work &nbsp; <p className="text-[#ffd700]">Experience</p>
        </h1>
        <div className="mt-12 flex justify-center">
        <Timeline data={experiences1} />
        </div>
      </div>
      <hr className="border-slate-200" />{" "}
    </section>
  );
};

export default Experience;
