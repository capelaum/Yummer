import Head from "next/head";
import { Banner } from "../components/Banner";

import { cookies } from "./api/database";

import styles from "../styles/Home.module.scss";
import { GetStaticProps } from "next";

type cookieType = {
  name: string;
  size: number;
  description: string;
  price: number;
};

export default function Home({ cookies }) {
  function renderCookies(cookies: cookieType[]) {
    return cookies.map(({ name, size }) => <li key={`${name}-${size}`}>{name}</li>);
  }

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
          <div className={styles.cookies}>{renderCookies(cookies)}</div>
        </section>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/cookies`);
  const cookies: cookieType[] = await res.json();

  return {
    props: {
      cookies,
    },
  };
};
