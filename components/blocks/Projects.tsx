"use client";
import { useEffect, useState } from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import { ProjectSchema } from "@/models/schema";

const projects = [
  {
    title: "BoST Inventory Management Portal",
    image: "/Projects/inventory_portal.png",
    description: "Portal to manage all BoST inventory.",
    link: "https://github.com/navnoorsingh0309/inventory-management",
  },
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
    link: "https://github.com/navnoorsingh0309/Fault-Tolerent-Control",
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
    title: "BOAA Website",
    image: "/Projects/3.jpeg",
    description: "Website of Board of Academic Affairs, IIT Ropar",
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
  const [projects, setProjects] = useState<ProjectSchema[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`/api/projects`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data.projects);
      } catch (err) {
        console.error("Error fetching inventory:", err);
      }
    };
    fetchProjects();
  }, []);
  return (
    <section
      className="flex flex-col justify-center space-y-4 items-center w-full p-4 px-[30px] sm:px-[70px] pt-[100px]"
      id="projects"
    >
      <h1
        className="text-4xl lg:text-7xl flex animate-bounce"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        My &nbsp; <p className="text-[#ffd700]">Projects</p>
      </h1>
      <HoverEffect items={projects} />
    </section>
  );
};

export default Projects;
