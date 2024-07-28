"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiAngular } from "react-icons/si";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sollicitudin finibus. In egestas laoreet feugiat. Nulla ac sagittis lacus. Proin vel blandit lectus, a varius sapien.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anwar Mestycer",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+216) 24 422 446",
    },
    {
      fieldName: "Email",
      fieldValue: "anwarmestycer0@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French, Arabic",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sollicitudin finibus. In egestas laoreet feugiat. Nulla ac sagittis lacus. Proin vel blandit lectus, a varius sapien.",
  items: [
    {
      company: "Tekniva",
      position: "Full-stack Developer Intern",
      duration: "Jun 2022 - Aug 2022",
    },
    {
      company: "InnevLabs",
      position: "Full-stack Developer",
      duration: "Jan 2023 - May 2023",
    },
    {
      company: "Lexi",
      position: "Mobile Developer Intern",
      duration: "Jun 2023 - Aug 2023",
    },
  ],
};
const education = {
  icon: "",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sollicitudin finibus. In egestas laoreet feugiat. Nulla ac sagittis lacus. Proin vel blandit lectus, a varius sapien.",
  items: [
    {
      institution: "Tataouine secondary school",
      diploma: "Baccalaureate in Computer science",
      duration: "Jul 2020",
    },
    {
      institution: "Tekniva",
      diploma: "Full-stack Web developement bootcamp",
      duration: "March 2022 - Jun 2022",
    },
    {
      institution:
        "Higher institute of informatics and mathematics of Monastir",
      diploma: "Bachelor in computer science",
      duration: "Sep 2021 - Present",
    },
    {
      institution: "Coursera",
      diploma: "Programming with Javascript",
      duration: "Jan 2022 - Feb 2022",
    },
    {
      institution: "Edx",
      diploma: "CS50: Introduction to computer",
      duration: "Jul 2023 - Present",
    },
  ],
};
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sollicitudin finibus. In egestas laoreet feugiat. Nulla ac sagittis lacus. Proin vel blandit lectus, a varius sapien.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <SiAngular />,
      name: "Angular",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCss",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Html 5",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 wl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row ga-[60px"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value={"experience"}>Experience</TabsTrigger>
            <TabsTrigger value={"education"}>Education</TabsTrigger>
            <TabsTrigger value={"skills"}>Skills</TabsTrigger>
            <TabsTrigger value={"about"}>About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full pt-3 xl:pt-0">
              <div className="flex flex-col gap-[30px] text-center xl:text-left xl:ml-10">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-18 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1  lg:pl-6"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] max-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full  pt-3 xl:pt-0">
              <div className="flex flex-col gap-[30px] text-center xl:text-left xl:ml-10">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-18 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1  lg:pl-6"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] max-h-[60px] text-center lg:text-left">
                            {item.diploma}
                          </h3>
                          <div className="flex items-center gap-3">
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full  pt-3 xl:pt-0">
              <div className="flex flex-col gap-[30px] xl:ml-10">
                <div className="flex flex-col gap-[30px] text-center xl:text-left xl:gap-[30px]">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:text-left  gap-4 xl:gap-[20px] ">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index} className="">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center  items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-380">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] xl:ml-10"> 
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[680px] mx-auto xl:mx-0">
                    {about.info.map((item, index)=> {
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl0">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
