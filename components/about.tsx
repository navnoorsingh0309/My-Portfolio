import React from "react";
import { WobbleCard } from "./wobble-cards";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 items-center bg-transparent w-full p-4 px-[30px] sm:px-[70px]">
      <h1
        className="text-5xl flex"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        About &nbsp; <p className="text-[#ffd700]">Me</p>
      </h1>
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 h-full bg-pink-800"
          className=""
        >
          <div>
            <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
              IITian
            </h2>
            <p className="mt-4 text-sm xl:text-xl text-neutral-200 w-full text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda commodi molestias provident aliquam quod eveniet doloribus saepe, iusto ipsam eos totam reprehenderit explicabo nobis facere, quasi maxime nesciunt deleniti, quia facilis?
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-2" className="">
          <div className="">
            <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
              Robotics
            </h2>
            <p className="mt-4 text-sm xl:text-xl text-neutral-200 sm:w-8/12 w-full text-justify">
              I have strong desire to contribute to development of robotics and
              advancement of technology in the world. I am passionate about the
              immense possibilities these offer for transforming industries,
              improving lives and pushing boundaries of innovation.
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
        <WobbleCard
          containerClassName="col-span-1 h-full bg-blue-900"
          className=""
        >
          <div>
            <h2 className="text-center sm:text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
              What I do?
            </h2>
            <p className="mt-4 text-sm xl:text-xl text-neutral-200 w-full text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi a libero consequuntur autem beatae aut quo sunt, explicabo eaque quis repellat voluptatem? Facere sapiente molestiae quas corporis harum. Aperiam voluptatibus ipsum, autem dolores dignissimos, inventore, fugiat nam laudantium minus laboriosam voluptas molestiae provident quasi iure rem perspiciatis placeat praesentium! Sit modi ratione fuga, quidem voluptatem natus exercitationem voluptatum pariatur. Deleniti ipsa maxime exercitationem quasi, mollitia vero eveniet culpa placeat assumenda provident aliquid dolores iure praesentium magnam consequuntur repellendus incidunt, nisi eligendi? At, eveniet reiciendis. Repellendus recusandae, suscipit, mollitia quasi sit quos, asperiores quisquam ducimus vitae architecto fuga beatae totam.
            </p>
          </div>
        </WobbleCard>
    </div>
  );
};

export default About;
