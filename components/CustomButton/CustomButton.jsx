import React from "react";
import styles from "./CustomButton.module.css";

const CustomButton = ({ text }) => {
  return <button className={styles.container}>{text}</button>;
};

export default CustomButton;
