import React from "react";
import styles from "/styles/Footer.module.css";

const Footer = ({ children }) => {
  return <div className={styles.footer}>{children}</div>;
};

Footer.title = ({ children }) => (
  <p className={styles.item_title}>{children}</p>
);

Footer.subtitle = ({ children }) => (
  <p className={styles.item_subtitle}>{children}</p>
);

Footer.item = ({ title, subtitle, children }) => {
  const content = subtitle ? (
    <Footer.subtitle className={styles.item_subtitle}>
      {subtitle}
    </Footer.subtitle>
  ) : (
    children
  );

  return (
    <div>
      <Footer.title className={styles.item_title}>{title}</Footer.title>
      {content}
    </div>
  );
};

export default Footer;
