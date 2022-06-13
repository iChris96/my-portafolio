import React from "react";
import styles from "/styles/Skills.module.css";

const Skills = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Skills.item = ({ title }) => {
  return <span className={styles.item}>{title}</span>;
};

export default Skills;
