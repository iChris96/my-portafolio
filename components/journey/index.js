import React from "react";
import styles from "/styles/Journey.module.css";
import { AiOutlineSmallDash } from "react-icons/ai";

const Journey = ({ children }) => {
  return <ul className={styles.container}>{children}</ul>;
};

Journey.item = ({ year, title, subtitle, children, ...props }) => {
  const handleOnClick = (scrollOffset) => {};

  return (
    <div className={styles.item_container} onClick={() => handleOnClick(40)}>
      <div className={styles.item_header}>
        <div>{year}</div>
        <div>
          <AiOutlineSmallDash className={styles.icon} />
        </div>
      </div>
      <div className={styles.item_content}>{children}</div>
    </div>
  );
};

export default Journey;
