"use client";
import React from "react";
import { fetchLeagues } from "@/utils";

const Leagues = async () => {
  const leagues = await fetchLeagues();
  console.log(leagues);

  return <div></div>;
};

export default Leagues;
