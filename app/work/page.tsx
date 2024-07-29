"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import WorkSliderBtns from "@/components/workSliderbtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "link sharing app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sollicitudin finibus.",
    stack: [
      { name: "Figma" },
      { name: "Html 5" },
      { name: "Angular" },
      { name: "Css 3" },
    ],
    image: "/assets/work/thumb2.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Designo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sollicitudin finibus.",
    stack: [
      { name: "Node.js" },
      { name: "MongoDb" },
      { name: "Angular" },
      { name: "Express.js" },
    ],
    image: "/assets/work/thumb3.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Fro",
    title: "Audiophile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sollicitudin finibus.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "React" },
      { name: "Figma" },
    ],
    image: "/assets/work/thumb1.jpg",
    live: "",
    github: "",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60 ">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((tech, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {tech.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border boerder-white/20"></div>
              <div className="flex gap-4 items-center mt-2">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[380px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="rounded-xl"
                          alt="project thumb"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-[100px] xl:right-[10px] z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] h-[30px] flex justify-center  items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
