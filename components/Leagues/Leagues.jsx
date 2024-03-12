import React from "react";
import styles from "./Leagues.module.css";
import Image from "next/image";
import { leagues } from "@/constants";

const Leagues = () => {
  return (
    <section className={styles.wrapper}>
      <h2>We partner with the best leagues around the world</h2>
      <div className={styles.leagues_container}>
        {leagues.map((league) => (
          <Image
            src={league.src}
            alt="league"
            key={league.id}
            className={styles.league}
          />
        ))}
      </div>
    </section>
  );
};

export default Leagues;
