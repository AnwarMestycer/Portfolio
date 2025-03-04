"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: "01",
    title: "Web development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sollicitudin finibus. In egestas laoreet feugiat. Nulla ac sagittis lacus. Proin vel blandit lectus, a varius sapien.",
    href: "",
  },
  {
    num: "04",
    title: "Mobile development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sollicitudin finibus. In egestas laoreet feugiat. Nulla ac sagittis lacus. Proin vel blandit lectus, a varius sapien.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit sollicitudin finibus. In egestas laoreet feugiat. Nulla ac sagittis lacus. Proin vel blandit lectus, a varius sapien.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center py-12 xl:py-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[68px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center text-primary text-2xl hover:-rotate-45">
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60 ">{service.description}</p>
                <div className="border-b border-white/20 w-full "></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
