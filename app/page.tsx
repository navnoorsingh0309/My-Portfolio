import About from "@/components/blocks/About";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import "./home.css";
import Contact from "@/components/contact";
import HeroSection from "@/components/blocks/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center space-y-0 h-full bg-blue-950/50">
      <div className="flex flex-col gap-2 w-full justify-center px-1 sm:px-10 bg-transparent text-center mx-auto items-center">
        <HeroSection/>
      </div>
      <div className="translate-y-[-80px]">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
