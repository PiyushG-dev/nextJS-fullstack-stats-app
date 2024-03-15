import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { navLinks } from "@/constants";
import { CustomButton } from "@/components/export";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image src={logo} alt="logo" className={styles.logo} />
      </Link>
      <div className={styles.nav_right}>
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} className={styles.navLink}>
            {link.title}
          </Link>
        ))}
        <CustomButton text="Get started" styling="bg-color-second" />
      </div>
    </div>
  );
};

export default Navbar;
