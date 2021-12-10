import { GetStaticProps } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.scss";

import { cookieType } from "../utils/types";

import { Banner } from "../components/Banner";
import { Cookies } from "../components/Cookies";

interface Menu {
  cookies: cookieType[];
}

export default function Home({ cookies }: Menu) {
  return (
    <>
      <Head>
        <title>Yummer</title>
      </Head>
      <div className={styles.container}>
        <Banner />

        <nav className={styles.menuNav}>
          <button className={styles.menuNavButton}>Cookies</button>
          <button className={styles.menuNavButton}>Rabanadas</button>
          <button className={styles.menuNavButton}>Sucos</button>
        </nav>
        <section className={styles.menu}>
          <Cookies cookies={cookies} />
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/menu`);
  const { cookies, toasts, juices } = await res.json();

  return {
    props: {
      cookies,
      toasts,
      juices,
    },
  };
};
