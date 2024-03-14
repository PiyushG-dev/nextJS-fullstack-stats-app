import React from "react";
import styles from "./CustomButton.module.css";

const CustomButton = ({ text, styling }) => {
  return <button className={`${styles.container} ${styling}`}>{text}</button>;
};

export default CustomButton;
