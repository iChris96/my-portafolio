import React from "react";
import Layout from "/components/layout";
import Projects from "/components/projects";
import Text from "/components/text";
import styles from "/styles/ProjectsPage.module.css";

const ProjectsPage = () => {
  return (
    <Layout>
      <section className={styles.projects_section} id="projects">
        <div>
          <Text.title>Projects</Text.title>
          <Text>I've worked with multiple projects as a developer like:</Text>
        </div>
        <div>
          <Projects>
            <Projects.item
              title="My Portafolio"
              subtitle="This is my own portafolio website"
              repoTitle="iChris96/my-portafolio"
              repoUrl="https://github.com/iChris96/my-portafolio"
              techArray={["React", "NextJS", "Javascript"]}
            >
              This was my personal portfolio website that has all my work and
              project experience, including my resume. It used to be my main
              portfolio before deploying this current portfolio.
            </Projects.item>
            <Projects.item
              title="MetroSmart Server"
              subtitle="Route recommendation system based in prediction
                  of influx of people in metro stations"
              techArray={["NodeJS", "Typescript", "MongoDB"]}
              repoTitle="iChris96/MetroSmart_Backend"
              repoUrl="https://github.com/iChris96/MetroSmart_Backend/tree/master"
            >
              This is the description
            </Projects.item>
            <Projects.item
              title="MetroSmart App"
              subtitle="Android with kotlin app"
              repoTitle="iChris96/MetroSmart_Android"
              repoUrl="https://github.com/iChris96/MetroSmart_Android/tree/develop"
              techArray={["Android", "Kotlin"]}
            >
              this is a very large description
            </Projects.item>
            <Projects.item
              title="Movies App"
              subtitle="NodeJS & Typescript app "
              repoTitle="iChris96/movies-app"
              repoUrl="https://github.com/iChris96/movies-app/tree/feature/auth"
              techArray={["NodeJS", "Typescript", "MYSQL"]}
            >
              this is a very large description
            </Projects.item>
          </Projects>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
