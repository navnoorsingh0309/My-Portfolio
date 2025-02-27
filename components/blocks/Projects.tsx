"use client";
import { useEffect, useState } from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import { ProjectSchema } from "@/models/schema";

interface props {
  loaded: boolean;
  setLoaded: (load: boolean) => void;
};

const Projects:React.FC<props> = ({loaded, setLoaded}) => {
  const [projects, setProjects] = useState<ProjectSchema[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`/api/projects`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data.projects.reverse());
        setLoaded(true);
      } catch (err) {
        console.error("Error fetching inventory:", err);
      }
    };
    fetchProjects();
  }, []);
  if (!loaded)
    return<></>
  return (
    <section
      className="flex flex-col justify-center space-y-4 items-center w-full p-4 px-[30px] sm:px-[70px] translate-y-[-200px] lg:translate-y-0"
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
