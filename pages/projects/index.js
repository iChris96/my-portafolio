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
              project experience, including my resume.
            </Projects.item>
            <Projects.item
              title="MetroSmart Server"
              subtitle="Route recommendation system based in prediction
                  of people influx in metro stations - API"
              techArray={["NodeJS", "Typescript", "MongoDB"]}
              repoTitle="iChris96/MetroSmart_Backend"
              repoUrl="https://github.com/iChris96/MetroSmart_Backend/tree/master"
            >
              This is an API who it responsible for serving the mobile application (or any other client) handling 
              connection to the database, running algorithms, provide metro station locations and user authorization.
            </Projects.item>
            <Projects.item
              title="MetroSmart App"
              subtitle="Route recommendation system based in prediction
              of people influx in metro stations - Android App"
              repoTitle="iChris96/MetroSmart_Android"
              repoUrl="https://github.com/iChris96/MetroSmart_Android/tree/develop"
              techArray={["Android", "Kotlin"]}
            >
              This is the Android App client who consumes the MetroSmart server. Is used by the users to see the metro stations locations and then build a route 
              based in prediction of people influx by stations.
            </Projects.item>
            <Projects.item
              title="Movies App"
              subtitle="NodeJS & Typescript app "
              repoTitle="iChris96/movies-app"
              repoUrl="https://github.com/iChris96/movies-app/tree/feature/auth"
              techArray={["NodeJS", "Typescript", "MYSQL"]}
            >
              This is an API to get information about films, cast, taglines, plots, crew, reviews, ratings and much more.
            </Projects.item>
          </Projects>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
