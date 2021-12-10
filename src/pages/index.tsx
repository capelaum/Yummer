import Head from "next/head";
import { Banner } from "../components/Banner";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yummer</title>
      </Head>
      <div className={styles.container}>
        <Banner />
        <section className={styles.menu}>
          <nav className={styles.menuNav}>
            <button>Cookies</button>
            <button>Rabanadas</button>
            <button>Sucos</button>
          </nav>
        </section>
      </div>
    </>
  );
}
