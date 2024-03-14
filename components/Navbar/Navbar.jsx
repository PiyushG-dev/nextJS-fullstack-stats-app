import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "@/public/logo.png";
import { navLinks } from "@/constants";
import { CustomButton } from "@/components";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <a href="#">
        <Image src={logo} alt="logo" className={styles.logo} />
      </a>
      <div className={styles.nav_right}>
        {navLinks.map((link) => (
          <a key={link.id} href={link.url}>
            {link.title}
          </a>
        ))}
        <CustomButton text="Get started" styling="bg-color-second" />
      </div>
    </div>
  );
};

export default Navbar;
