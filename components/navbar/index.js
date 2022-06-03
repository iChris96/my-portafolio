import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import { BsGithub } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a className={styles.iconContainer} href="https://github.com/iChris96">
          <BsGithub className={styles.icon} />
        </a>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="/skills">Skills</Link>
        </li>
        <li className={styles.li}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={styles.li}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.li}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
