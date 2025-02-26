"use client";
import About from "@/components/blocks/About";
import Projects from "@/components/blocks/Projects";
import "./home.css";
import Contact from "@/components/contact";
import HeroSection from "@/components/blocks/HeroSection";
import TechStack from "@/components/blocks/Skills";
import { useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  const [loadedHero, setHeroLoaded] = useState(false);
  const [loadedAbout, setAboutLoaded] = useState(false);
  const [loadedProjects, setProjectsLoaded] = useState(false);
  const [loadedTechStack, setTechLoaded] = useState(false);
  return (
    <>
      <LoadingScreen
        loaded={loadedHero && loadedProjects && loadedTechStack && loadedAbout}
      />
      <div className="flex flex-col justify-center space-y-0 h-full bg-blue-950/50">
        <div className="flex flex-col gap-2 w-full justify-center px-1 sm:px-10 bg-transparent text-center mx-auto items-center">
          <HeroSection loaded={loadedHero} setLoaded={setHeroLoaded} />
        </div>
        <div className="translate-y-[-80px]">
          <About loaded={loadedHero && loadedAbout} setLoaded={setAboutLoaded} />
          <Projects loaded={loadedHero && loadedAbout && loadedProjects} setLoaded={setProjectsLoaded} />
          <TechStack loaded={loadedHero && loadedAbout && loadedProjects && loadedTechStack} setLoaded={setTechLoaded} />
          {/* <Contact /> */}
        </div>
      </div>
    </>
  );
}
