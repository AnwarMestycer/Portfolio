"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return <Sheet>
    <SheetTrigger className="felx justify-center items-center">
        <CiMenuFries  className="text-4xl text-accent" />
    </SheetTrigger>
    <SheetContent className="flex flex-col items-center gap-20">
        <div className="text-center text-2xl mt-10 ">

        </div>
    <Link href="/">
          <h1 className="text-4xl font-semibold ">
            Anwar<span className="text-accent">.</span>
          </h1>
        </Link>
        <nav className=" flex flex-col justify-center items-center gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
    </SheetContent>
  </Sheet>;
};

export default MobileNav;
