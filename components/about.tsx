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
        className="text-5xl flex"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        About &nbsp; <p className="text-[#ffd700]">Me</p>
      </h1>
      <br />
      <div className="grid grid-rows-2 gap-4 mx-auto w-full">
        <div className="grid grid-cols-1 gap-4 row-span-1 lg:grid-cols-3">
        <WobbleCard
          containerClassName="col-span-1 h-full bg-pink-800"
          className=""
        >
          <div>
            <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
              IITian
            </h2>
            <p className="mt-4 text-sm xl:text-xl text-neutral-200 w-full text-justify">
              I am currently pursuing a degree in Electrical Engineering at the
              Indian Institute of Technology (IIT), Ropar. IIT Ropar is renowned
              for its rigorous academic curriculum, state-of-the-art research
              facilities, and a collaborative environment that fosters
              innovation and critical thinking.
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-2" className="">
          <div className="">
            <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
              Robotics
            </h2>
            <p className="mt-4 text-sm xl:text-xl text-neutral-200 sm:w-8/12 w-full text-justify">
              I have a strong passion for robotics and enjoy engaging in
              practical work. My enthusiasm for robotics drives me to explore
              various projects and hands-on experiences, enhancing my
              understanding and skills in the field. Currently, I am leading the
              Robotics Club of my college as the Secretary, where I spearhead
              various projects and initiatives, further enhancing my
              understanding and skills in the field.
            </p>
          </div>
          <Image
            src="/robotics.jpg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-[40%] filter -top-10 w-full h-[150%] object-contain rounded-2xl hidden sm:flex"
          />
        </WobbleCard>
      </div>
      <div className="row-span-1">
      <WobbleCard
        containerClassName="col-span-1 h-full bg-blue-900"
        className=""
      >
        <div>
          <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
            What I do?
          </h2>
          <p className="mt-4 text-sm xl:text-xl text-neutral-200 w-full text-justify">
            An aspiring learner who is passionate about Robotics, AI, ML, and
            Software development. I have strong desire to contribute to
            development of robotics and advancement of technology in the world.
            I am passionate about the immense possibilities these offer for
            transforming industries, improving lives and pushing boundaries of
            innovation. My dedication to robotics is beyond the bounds of
            theoretical knowledge. I am currenting developing my skills through
            practical projects. These experiences have allowed me to implement
            robotic system, develop intelligent algorithms for autonomous
            decision making, and contribute to software solutions that optimize
            efficiency and performance. I am ready and bold enough to take
            technical challenges that can shape today's industry and technical
            aspects within me.
          </p>
        </div>
      </WobbleCard>
      </div>
      </div>
    </section>
  );
};

export default About;
