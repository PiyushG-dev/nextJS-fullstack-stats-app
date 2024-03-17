import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/toggle";

const Navbar = () => {
  return (
    <div className="fixed w-full border-b-[1px] py-3 px-14 2xl:px-0 2xl:flex 2xl:justify-center">
      <div className="flex justify-between items-center 2xl:w-[1536px]">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-base">
            Venture studio
          </Link>
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-muted-foreground font-light text-sm 2xl:text-base"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Button>Get started</Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
