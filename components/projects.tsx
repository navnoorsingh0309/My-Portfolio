"use client";

import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "Fleet Management in ROS2 Humble",
    image: "/Projects/bharatforge.png",
    description: "BharatForge Submission in Inter IIT Tech 13.0.",
    link: "https://github.com/navnoorsingh0309/Inter_IIT_BharatForge",
  },
  {
    title: "Fault Tolerant Control of UAV",
    image: "/Projects/ideaforge.png",
    description: "Single Motor Failure Recovery.",
    link: "/",
  },
  {
    title: "VR Hand Glove",
    image: "/Projects/VR hand glove.jpg",
    description: "Virtual Reality hand glove using unity.",
    link: "https://github.com/navnoorsingh0309/VR-Hand-Unity",
  },
  {
    title: "Risc-V Assembler",
    image: "/Projects/1.png",
    description: "",
    link: "https://github.com/navnoorsingh0309/Riscv_Assembler",
  },
  {
    title: "5 stage MIP32 Processor",
    image: "/Projects/2.png",
    description: "Processor based on MIP32 Instruction Set Architecture(ISA).",
    link: "https://github.com/navnoorsingh0309/MIP32_Pipelined_Processor",
  },
  {
    title: "Adelaar",
    image: "/Projects/Adelaar.jpeg",
    description: "RC Plane.",
    link: "/",
  },

  {
    title: "JLR Chiplet Challenge",
    image: "/Projects/jlr.jpeg",
    description: "JLR Submission in Inter IIT Tech 12.0.",
    link: "/",
  },

  {
    title: "Line Follower with PID Control",
    image: "/Projects/line-follower.jpeg",
    description: "Mobile bot that follows the line.",
    link: "/",
  },
  {
    title: "BOAA Website",
    image: "/Projects/3.jpeg",
    description: "Site of Board of Academic Affairs, IIT Ropar",
    link: "https://iitrpr.ac.in/boaa",
  },
  {
    title: "Omni wheel",
    image: "/Projects/omni.jpg",
    description: "Omni Wheel using mecanum wheels.",
    link: "/",
  },
  {
    title: "Gesture Controller Car",
    image: "/Projects/gesture control.jpg",
    description: "Car controlled using gesture of hand",
    link: "/",
  },
  {
    title: "Hovercraft",
    image: "/Projects/Hovercraft.jpg",
    description: "Bluetooth controller hovercraft.",
    link: "/",
  },
];

const Projects = () => {
  return (
    <section
      className="flex flex-col justify-center space-y-4 items-center bg-blue-950/50 w-full p-4 px-[30px] sm:px-[70px] pt-[100px]"
      id="projects"
    >
      <h1
        className="text-4xl lg:text-7xl flex animate-bounce"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        My &nbsp; <p className="text-[#ffd700]">Projects</p>
      </h1>
      {/* <div className="flex flex-wrap items-center justify-center"> */}
      <HoverEffect items={projects} />
      {/* </div> */}
    </section>
  );
};

export default Projects;
