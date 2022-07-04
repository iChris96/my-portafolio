import React from "react";
import styles from "/styles/Button.module.css";

const Button = (props) => {
  if (props.href) {
    return <a {...props} />;
  }

  return <button id={styles.button} type="button" {...props} />;
};

export default Button;
