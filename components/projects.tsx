"use client";

import { PinContainer } from "./3d-pin";

const projects = [
  {
    id: "1",
    title: "Risc-V Assembler",
    img: "/Projects/1.png",
    des: "This is the implementation of a simple assembler which assembler Risc-V Assembly Code to Machine Code. The assembler supports various Risc-V instructions including R-type, I-Type, S-Type, SB-Type, U-Type, UJ-Type.",
    link: "https://github.com/navnoorsingh0309/Riscv_Assembler",
    iconLists: ["/stack/C++.png"]
  },
  {
    id: "2",
    title: "5 stage MIP32 Processor",
    img: "/Projects/2.png",
    des: "This is the implementation of a processor based on MIP32 Instruction Set Architecture(ISA) which can perform basic arithmetic operations and logical operations and can perform conditional branching. This processor can store and read data from a bank of registers using pipelining.",
    link: "https://github.com/navnoorsingh0309/MIP32_Pipelined_Processor",
    iconLists: ["/stack/Verilog.png"]
  },
  {
    id: "3",
    title: "BOAA Website",
    img: "/Projects/3.jpeg",
    des: "I independently designed and developed the website for the Board of Academic Affairs at IIT Ropar using HTML, CSS, and Vanilla JavaScript. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia recusandae nostrum id dolorem labore ipsum accusamus sequi magnam, optio praesentium inventore sapiente minima consequatur delectus temporibus dignissimos. Similique doloribus est commodi!",
    link: "https://iitrpr.ac.in/boaa",
    iconLists: ["/stack/html.png", "/stack/CSS.png", "/stack/js.png"]
  },
  {
    id: "4",
    title: "Comman Gateway Interface (CGI)",
    img: "/Projects/4.png",
    des: "The Common Gateway Interface (CGI) is a standard that facilitates communication between web servers and external databases or information sources. In this I have created a submission form which takes your information and one picture and then using CGI with Perl, it shows next page. I have create form in HTML with the help of Bootstrap. For php calling using POST method, I have utlized ajax in jquery, by which picture is saved on the server side, to be used by CGI to show client.",
    link: "https://github.com/navnoorsingh0309/Common_Gateway_Interface",
    iconLists: ["/stack/html.png", "/stack/CSS.png", "/stack/php.png", "/stack/perl.png"]
  },
  {
    id: "5",
    title: "Advanced Encryption Standard (AES)",
    img: "/Projects/5.png",
    des: "Advanced Encryption Standard (AES) is a specification for the encryption of electronic data established by the U.S National Institute of Standards and Technology (NIST) in 2001. This is a simple implementation of Advanced Encryption Standard(AES-128) to encrypt and decrypt 16 byte of sample data using C++.",
    link: "https://github.com/navnoorsingh0309/Advanced_Encryption_Standard",
    iconLists: ["/stack/C++.png"]
  },
  {
    id: "6",
    title: "TCP Client Server",
    img: "/Projects/6.png",
    des: "A Simple Chat Room which uses TCP service to convey messages and uses MongoDB for login and Sign Up purpose. It also utlitizes multithreading to support multiple requests at the same time. Sign Up features is also there to add new users and when one user left the chat, it automatically get deleted from server broadcasting channel.",
    link: "https://github.com/navnoorsingh0309/TCP_Client_Server",
    iconLists: ["/stack/python.png", "/stack/mongo.jpg"]
  },
  {
    id: "7",
    title: "Sentimental Analysis",
    img: "/Projects/7.png",
    des: "This project showcases a Sentimental Analysis Model that utilizes RNN and LSTM. The Model predicts your text is positive or negative along giving a score between 0 and 1. In this project first we clean data using various pre-processing techniques and then we create our model, structure is given in github.",
    link: "https://github.com/navnoorsingh0309/Sentimental_Analysis_LSTM",
    iconLists: ["/stack/python.png", "/stack/tensor-flow.png"]
  },
  {
    id: "8",
    title: "Gesture drawing using OpenCV",
    img: "/Projects/8.png",
    des: "This script allows you to draw on a live webcam screen using hand gestures, with the option to select different colors. It's a versatile tool that can be used in various real-life scenarios where you need to mark or inspect images, not necessarily on life camera.",
    link: "https://github.com/navnoorsingh0309/Gesture-Drawing",
    iconLists: ["/stack/python.png", "/stack/tensor-flow.png"]
  },
  {
    id: "9",
    title: "Lempel-Ziv-Welch Compression",
    img: "/Projects/9.png",
    des: "LZW is a compression algorithm that is table-based lookup algorithm to remove duplicate data and compress original file to a smaller size. This is the implemented of similar algorithm in C++;",
    link: "https://github.com/navnoorsingh0309/Data_Compressiong_LZW",
    iconLists: ["/stack/C.png"]
  },
  {
    id: "10",
    title: "Packet Sniffer",
    img: "/Projects/10.jpg",
    des: "This script sniffers packets through a network and inspects as they traverse a network. This script is made using kali linux and it will work on on linux OS. This can be used in real life to observe and manage network trafficking.",
    link: "https://github.com/navnoorsingh0309/Packet-Sniffer",
    iconLists: ["/stack/python.png"]
  }
];

const Projects = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 items-center bg-transparent w-full p-4 px-[30px] sm:px-[70px] mt-[100px]">
      <h1
        className="text-5xl flex"
        style={{ fontFamily: "GaMaamli, sans-serif" }}
      >
        My &nbsp; <p className="text-[#ffd700]">Projects</p>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-y-40 gap-x-24 pt-10 sm:pt-20">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title="View" href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <a href={item.link} target="_blank">
                <img src={item.img} alt="cover" className="z-10 w-full" />
                </a>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-6"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Project Now
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
