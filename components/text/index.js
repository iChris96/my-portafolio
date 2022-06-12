import styles from "/styles/Text.module.css";

const Text = ({ children, ...delegated }) => {
  return <p className={styles.text}>{children}</p>;
};

Text.title = ({ children }) => <h1 className={styles.title}>{children}</h1>;

Text.subtitle = ({ children }) => <p className={styles.subtitle}>{children}</p>;

export default Text;
