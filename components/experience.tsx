"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
    name: "Node Js",
    imageUrl: "/stack/nodejs.png",
  },
  {
    name: "Express Js",
    imageUrl: "/stack/expressjs.png",
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
    imageUrl: "/stack/appwrite.png"
  },
  {
    name: "Next Js",
    imageUrl: "/stack/nextjs.png",
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
      "Worked on efficient increment for BLE packet over long range transmission using various algorithms and techniques."
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
      "Software platform generates plots fo potential and employs various analytical techniques to ensure comprehensive analysis."
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
      "I am current engaged in research concerning connectivity analysis and source localization on mediation EEG data."
    ],
  },
];

const Experience = () => {
  return (
    <section className="flex flex-col justify-center space-y-4 items-center bg-blue-950/50 w-full p-4 px-8 lg:px-60 xl:px-72 pt-[200px]" id="experience">
      <h1
        className="text-5xl flex"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        My &nbsp; <p className="text-[#ffd700]">Experience</p>
      </h1>
      {/* Tech Stack */}
      <div className="w-full text-center md:text-left pt-10">
        <h1 className="text-3xl">My Tech Stack</h1>
        <div className="mt-16 flex flex-wrap justify-center gap-10 md:gap-24">
          {skills.map((skill) => (
            <div className="block-container w-14 h-14 md:w-20 md:h-20" key={skill.name}>
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
      <h1 className="text-3xl">Work Experience</h1>
        <div className="mt-12 flex justify-center">
        <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                visible={true}
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2 text-left'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black/50 font-normal pl-1 text-sm text-left'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />{" "}
    </section>
  );
};

export default Experience;
