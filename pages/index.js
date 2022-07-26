import styles from "/styles/Home.module.css";
import Image from "next/image";
import Logo from "/public/me.png";
import Text from "/components/text";
import Skills from "/components/skills";
import Journey from "/components/journey";
import Layout from "/components/layout";
import Button from "/components/button";
import Link from "next/link";
import { GrFormNextLink } from 'react-icons/gr';

export default function Main() {
  return (
    <Layout>
      <main>
        <div className={styles.container}>
          <section className={styles.start_section}>
            <div>
              <div className={styles.start_title_container}>
                <Text.title>Christopher Larios</Text.title>
                <Text.subtitle>
                  Software Engineer&nbsp;<span>&#128187;</span> | Car
                  enthusiast&nbsp;
                  <span>&#128663;</span> | Coffee Lover&nbsp;
                  <span>&#9749;</span>
                </Text.subtitle>
              </div>
              <div className={styles.start_content_container}>
                <Text>
                  Hey there, this is Chris. I am a software engineer who love{" "}
                  <br />
                  work with React, NodeJs and MoongoDB.
                </Text>
              </div>
            </div>

            <div className={styles.img_container}>
              <Image
                src={Logo}
                alt="Picture of the author"
                width={200}
                height={200}
              />
            </div>
          </section>
          <div className={styles.bar} />
          <section className={styles.journey_section} id="journey">
            <Text.title>My Journey</Text.title>
            <Text>
              In my journey to date, I have learned a great deal about
              development and life in general.
            </Text>
            <Journey>
              <Journey.item year="2016" title="Uni">
                Started my journey as a computer engineer student.
              </Journey.item>
              <Journey.item year="2019">
                Got an intership as android developer at Bosch Company.
              </Journey.item>
              <Journey.item year="2020">
                End my journey as Computer Science student.
              </Journey.item>
              <Journey.item year="2020">
                Started my journey as a full time software developer at Bosch
                Company.
              </Journey.item>
              <Journey.item year="2021">
                Started a new journey as software developer at Wizeline.
              </Journey.item>
            </Journey>
          </section>
          <div className={styles.bar} />
          <section className={styles.skills_section} id="skills">
            <Text.title>Skills</Text.title>
            <Text>
              I've worked with multiple technologies as a developer to develop &
              maintain my own and external projects.
            </Text>
            <Skills>
              <Skills.item title="React" />
              <Skills.item title="Typescript" />
              <Skills.item title="Javascript" />
              <Skills.item title="MongoDB" />
              <Skills.item title="NodeJS" />
              <Skills.item title="React Native" />
              <Skills.item title="Kotlin" />
              <Skills.item title="Git" />
              <Skills.item title="NextJS" />
              <Skills.item title="CSS" />
            </Skills>
          </section>
          <div className={styles.bar} />
          <section className={styles.projects_section} id="projects">
            <Link href="/projects">
              <Button
                rightIcon={<GrFormNextLink className={styles.nextIcon} />}
              >My Projects</Button>
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  );
}
