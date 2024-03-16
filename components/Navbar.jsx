import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-[1px] py-5 px-8 2xl:px-0 2xl:border-b-0">
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
      <Button>Get started</Button>
    </div>
  );
};

export default Navbar;
