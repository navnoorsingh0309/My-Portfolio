import React from "react";
import { WobbleCard } from "./wobble-cards";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="flex flex-col justify-center space-y-4 items-center bg-blue-950/50 w-full p-4 px-[30px] sm:px-[70px]"
      id="about"
    >
      <h1
        className="text-4xl lg:text-7xl flex animate-bounce"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        About &nbsp; <p className="text-[#ffd700]">Me</p>
      </h1>
      <br />
      <div className="grid grid-rows-2 gap-4 mx-auto w-full">
        <div className="grid grid-cols-1 gap-4 row-span-1 lg:grid-cols-3">
          <WobbleCard
            containerClassName="col-span-1 bg-pink-800 lg:h-[400px]"
            className=""
          >
            <div>
              <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                Study
              </h2>
              <p className="mt-4 text-sm xl:text-xl text-neutral-200 w-full text-justify">
                I am currently pursuing a degree in Electrical Engineering at
                the Indian Institute of Technology (IIT), Ropar. IIT Ropar is
                renowned for its rigorous academic curriculum, state-of-the-art
                research facilities, and a collaborative environment that
                fosters innovation and critical thinking.
              </p>
            </div>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 sm:h-[450px] md:h-[350px] lg:h-[400px]"
            className=""
          >
            <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              <div className="col-span-1 xl:col-span-2">
                <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                  Robotics
                </h2>
                <p className="mt-4 text-sm xl:text-xl text-neutral-200 text-justify">
                  I have a strong passion for robotics and enjoy engaging in
                  practical work. My enthusiasm for robotics drives me to
                  explore various projects and hands-on experiences, enhancing
                  my understanding and skills in the field. Currently, I am
                  leading the Robotics Club of my college as the Secretary,
                  where I spearhead various projects and initiatives, further
                  enhancing my understanding and skills in the field.
                </p>
              </div>
              <div className="col-span-1 flex justify-end translate-x-20 translate-y-[-70px]">
                <Image
                  src="/robotics.jpg"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="filter sm:h-[480px] lg:h-[420px]  rounded-2xl hidden sm:flex "
                />
              </div>
            </div>
          </WobbleCard>
        </div>
        <div className="row-span-1">
          <WobbleCard containerClassName="col-span-1 bg-blue-900" className="">
            <div>
              <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                What I do?
              </h2>
              <p className="mt-4 text-sm xl:text-xl text-neutral-200 w-full text-justify">
              I have extensive experience in building full-fledged software using C++ and Java, ensuring robust and efficient performance. Additionally, I specialize in developing full-stack responsive websites utilizing modern frameworks and technologies. For the front end, I leverage Next.js and React.js to create dynamic and interactive user interfaces. On the backend, I employ Node.js, Express.js, and Go to build scalable and high-performance server-side applications. In addition to this, I create Android apps using Kotlin and Android Studio. I also develop highly scalable production-ready models for various deep learning and statistical use cases. My experience includes working on projects involving Computer Vision and Natural Language Processing (NLP), allowing me to tackle complex problems and deliver innovative solutions.
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
};

export default About;
