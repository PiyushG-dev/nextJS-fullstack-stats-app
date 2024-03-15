import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import { CustomButton } from "@/components/export";
import { heroText } from "@/constants";
import figure1 from "@/public/figure1.png";
import figure2 from "@/public/figure2.png";
import dash from "@/public/dash.png";

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <Image src={figure1} alt="img" className={styles.figure_one} />
      <div className={styles.heading_container}>
        <h1>{heroText.heading}</h1>
        <div className={styles.info_container}>
          <p>{heroText.info}</p>
          <CustomButton text="Get Started" styling="bg-color-second" />
        </div>
      </div>
      <Image src={dash} alt="dashboard" className={styles.dash} />
      <Image src={figure2} alt="img" className={styles.figure_two} />
    </section>
  );
};

export default Hero;
