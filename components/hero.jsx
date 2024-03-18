import React from "react";
import { heroText } from "@/constants";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-14 2xl:px-0 2xl:w-[1536px] 2xl:mx-auto">
      <div className="flex gap-10 items-center">
        <div className="w-2/4 flex flex-col gap-4 items-start">
          <Badge variant="secondary" className="font-thin text-sm">
            ⚽️ we connect you to all top teams and leagues
          </Badge>
          <h1 className=" text-7xl">{heroText.heading}</h1>
        </div>
        <div className="w-2/4 flex flex-col gap-4 items-start">
          <p className="text-xl 2xl:text-2xl text-muted-foreground">
            {heroText.info}
          </p>
          <Button>Get started for free</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
