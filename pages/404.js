import React from "react";
import styles from "/styles/NotFound.module.css";
import Link from "next/link";
import Button from "/components/button";
import Layout from "/components/layout";
import Text from "/components/text";

const NotFound = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Text id={styles.text}>404</Text>
        <Text>Oops.. Looks like you got lost</Text>
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
