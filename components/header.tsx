import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

//components
import { Nav } from "./nav";
import MobileNav from "./mobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container  flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Anwar<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex gap-8 items-center md:flex md:gap-6">
          <Nav />
          <Button>Hire me</Button>
        </div>
        <div className="xl:hidden md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
