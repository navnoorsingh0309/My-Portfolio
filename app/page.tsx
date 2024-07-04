import About from "@/components/about";
import Experience from "@/components/experience";
import { FlipWords } from "@/components/flip-words";
import { NavBar } from "@/components/navbar";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  const words = [
    "A Software Developer",
    "A Machine Learning Enthusiast",
    "A Business Enthusiast",
    "Feel Free to contact me :)",
  ];
  return (
    <div className="flex flex-col justify-center items-center bg-blue-50/20">
      <div className="flex flex-col gap-2 w-screen h-screen px-5 sm:px-10 bg-transparent text-center mx-auto items-center">
        <NavBar />

        {/* Tech Stack */}
        <div className="flex justify-between w-full">
          <Image
            src="/tensor-flow.png"
            width={100}
            height={100}
            alt="Tensorflow"
            className="w-14 h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 translate-y-10 md:translate-y-0"
          />
          <Image
            src="/python.png"
            width={100}
            height={100}
            alt="python"
            className="w-14 h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 translate-y-20 md:w-36 md:h-36"
          />
          <Image
            src="/react.png"
            width={100}
            height={100}
            alt="React"
            className="w-14 h-14 lg:w-20 lg:h-20 xl:w-24 xl:h-24 translate-y-10 md:translate-y-0"
          />
        </div>

        {/* Greetings */}
        <div className="flex flex-col space-y-2 md:space-y-4 justify-center items-center h-screen text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold absolute">
          <h1 className="text-[#FFD700]">Hi, I am Navnoor Singh 👋</h1>
          {<FlipWords words={words} />}
        </div>
      </div>
      <About />
      <Projects/>
      <Experience/>
    </div>
  );
}
