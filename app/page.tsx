import About from "@/components/about";
import Experience from "@/components/experience";
import { FlipWords } from "@/components/flip-words";
import { NavBar } from "@/components/navbar";
import Projects from "@/components/projects";
import './home.css'
import { useRef } from "react";

export default function Home() {
  
  const words = [
    "A Software Developer",
    "A Machine Learning Enthusiast",
    "A Business Enthusiast",
    "Feel Free to contact me :)",
  ];
  return (
    <div className="flex flex-col justify-center items-center h-full bg-blue-50/20">
      <NavBar />
      <div className="flex flex-row gap-2 w-screen h-screen justify-center px-1 sm:px-10 bg-transparent text-center mx-auto items-center">

        {/* Contact */}
        <div className="flex flex-col justify-center items-center gap-6">
          <a href="https://github.com/navnoorsingh0309" target="_blank">
            <img
              src="/contact/github.jpg"
              className="contact-icon md:w-14 md:h-14 w-8 h-8 rounded-full"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/navnoor-singh-bal-4a7611256/"
            target="_blank"
          >
            <img
              src="/contact/linkedin.png"
              className="contact-icon md:w-14 md:h-14 w-8 h-8 rounded-full"
            />
          </a>
          <a href="mailto:nbbal2003@gmail.com" target="_blank">
            <img
              src="/contact/mail.jpg"
              className="contact-icon md:w-14 md:h-14 w-8 h-8 rounded-full"
            />
          </a>
        </div>

        {/* Greetings */}
        <div className="flex flex-col space-y-2 md:space-y-4 justify-center items-center h-screen text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold greetings text-nowrap w-full">
          <h1 className="text-[#FFD700]">Hi, I am Navnoor Singh 👋</h1>
          {<FlipWords words={words} />}
        </div>
      </div>
      <About />
      <Projects />
      <Experience />
    </div>
  );
}
