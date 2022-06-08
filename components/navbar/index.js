import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import { BsGithub } from "react-icons/bs";

const LinkItem = (props) => {
  return (
    <li className={styles.li}>
      <Link {...props}></Link>
    </li>
  );
};

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a className={styles.iconContainer} href="https://github.com/iChris96">
          <BsGithub className={styles.icon} />
        </a>
      </div>
      <ul className={styles.ul}>
        <LinkItem href="/">Home</LinkItem>
        <LinkItem href="/skills">Skills</LinkItem>
        <LinkItem href="/projects">Projects</LinkItem>
        <LinkItem href="/about">About</LinkItem>
        <LinkItem href="/contact">Contact</LinkItem>
      </ul>
    </nav>
  );
};

export default NavBar;
