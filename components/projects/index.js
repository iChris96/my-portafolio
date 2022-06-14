import React from "react";
import PropTypes from "prop-types";
import styles from "/styles/Projects.module.css";
import { BsGithub } from "react-icons/bs";

const Projects = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Projects.item = ({
  title,
  subtitle,
  children,
  repoTitle,
  repoUrl,
  techArray,
}) => {
  return (
    <div className={styles.item_container}>
      <div className={styles.item_header_container}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.item_description_container}>
        <p className={styles.description}>{children}</p>
      </div>

      <div className={styles.footer_container}>
        <div className={styles.techArray_container}>
          {techArray &&
            techArray.map((it) => (
              <p className={styles.techArray_item}>{it}</p>
            ))}
        </div>
        <span className={styles.repoTitle}>
          <a href={repoUrl} target="_blank">
            <BsGithub className={styles.icon} />
            {repoTitle}
          </a>
        </span>
      </div>
    </div>
  );
};

Projects.item.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.func,
  description: PropTypes.string,
  repoUrl: PropTypes.string,
  // children: PropTypes.node.isRequired,
  //onClick: PropTypes.func,
  //style: PropTypes.object,
};

export default Projects;
