import { FlipWords } from "@/components/flip-words";
import { NavBar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  const words = [
    "A Software Developer",
    "A Machine Learning Enthusiast",
    "A Business Enthusiast",
    "Feel Free to conact me :)",
  ];
  return (
    <div className="flex flex-col gap-2 w-full h-full px-5 sm:px-10 bg-blue-50/10 items-center">
      <NavBar />

      <div className="flex justify-between w-full">
        <Image
          src="/tensor-flow.png"
          width={100}
          height={100}
          alt="Tensorflow"
          className=""
        />
        <Image
          src="/python.png"
          width={100}
          height={100}
          alt="python"
          className="translate-y-20"
        />
        <Image src="/react.png" width={100} height={100} alt="React" />
      </div>

      <div className="flex flex-col gap-2 justify-center items-center w-full h-full text-3xl md:text-5xl font-bold">
        <h1 className="text-[#FFD700]">Hi, I am Navnoor 👋</h1>
        {<FlipWords words={words} />}
      </div>
    </div>
  );
}
