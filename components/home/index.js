import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <main>
        <div className={styles.container}>
          <section>
            <div>
              <h1 className={styles.title}>Christopher Larios</h1>
              <p className={styles.subtitle}>
                Software Engineer | Car enthusiast | Coffee Lover
              </p>
            </div>
            <div>
              <p>
                this is a text
                loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
};

export default Home;
