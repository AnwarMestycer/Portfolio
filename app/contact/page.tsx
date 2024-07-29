"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectContent,
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+216) 24422446",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "anwarmestycer0@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Tataouine, Tunisia",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-0 xl:gap-6">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                hendrerit sollicitudin finibus.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="select a service"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value={"web"}>Web development</SelectItem>
                      <SelectItem value={"mobile"}>Mobile development</SelectItem>
                      <SelectItem value={"design"}>UI/UX development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
                <Textarea className="h-[200px]" placeholder="Message"/>
                <Button size="sm" className="max-w-40">Send</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-4">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[50px] h-[50px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center gap-6 text-2xl">
                    <div>{item.icon}</div>
                  </div>
                  <div>
                    <p className="">{item.title}</p>
                    <h3 className="text-1xl font-bold">{item.description}</h3>
                  </div>

                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
