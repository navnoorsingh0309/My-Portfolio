import About from "@/components/about";
import Experience from "@/components/experience";
import { FlipWords } from "@/components/flip-words";
import { NavBar } from "@/components/navbar";
import Projects from "@/components/projects";
import "./home.css";
import Contact from "@/components/contact";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const slideData = [
  {
    title: "IIT BHU MUN 2023",
    src: "/carousel/1.jpeg",
  },
  {
    title: "SkyMasters, Advitiya 2024",
    src: "/carousel/2.jpeg",
  },
  {
    title: "Robotics Club ISMP 2024",
    src: "/carousel/3.jpeg",
  },
  {
    title: "Technoxian 2024",
    src: "/carousel/4.jpeg",
  },
  {
    title: "Zeitgeist 2024",
    src: "/carousel/5.jpeg",
  },
  {
    title: "Inter IIT Tech Meet 13.0",
    src: "/carousel/6.jpeg",
  },
  {
    title: "Robotics Club GC 2025",
    src: "/carousel/7.jpeg",
  },
  {
    title: "General Championship 2025",
    src: "/carousel/8.jpeg",
  },
];

export default function Home() {
  const words = [
    "A Software Developer",
    "A Robotics Enthusiast",
    "A Business Enthusiast",
    "Feel Free to contact :)",
  ];
  return (
    <div className="flex flex-col justify-center space-y-0 h-full bg-blue-950/50">
      <div className="flex flex-col gap-2 w-full justify-center px-1 sm:px-10 bg-transparent text-center mx-auto items-center">
        <NavBar />
        <div className="grid grid-cols-1 w-full h-fit pb-[100px] pt-[50px] md:grid-cols-2">
          {/* <div className="flex flex-row gap-2 w-full justify-center bg-transparent text-center mx-auto items-center translate-y-[-80px]"> */}
          {/* Greetings */}
          <div className="grid grid-rows-2">
            <div className="row-span-1 flex flex-col space-y-2 md:space-y-4 justify-end items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold greetings text-nowrap w-full">
              <h1 className="text-[#FFD700]">Hi, I am Navnoor Singh 👋</h1>
              {<FlipWords words={words} />}
              {/* </div> */}
            </div>
            {/* Contact */}
            <div className="flex flex-row justify-center items-center gap-6">
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
          </div>
          <div className="col-span-1">
            <div className="flex items-center justify-center">
              <Carousel className="w-[400px]">
                <CarouselContent>
                  {slideData.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex-col aspect-square items-center justify-center p-6">
                            <img
                              src={item.src}
                              className="object-cover w-auto h-full"
                            />
                            <h1 className="text-center font-bold text-2xl">
                              {item.title}
                            </h1>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black translate-y-[-80px]">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
