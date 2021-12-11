import Head from "next/head";
import { GetStaticProps } from "next";

import { cookieType } from "utils/types";

import { Menu } from "components/Menu";
import { Banner } from "components/Banner";
import { MenuNav } from "components/MenuNav";

import { Container } from "styles/home";

interface Menu {
  cookies: cookieType[];
}

export default function Home({ cookies }: Menu) {
  return (
    <>
      <Head>
        <title>Yummer</title>
      </Head>
      <Container>
        <Banner />

        <MenuNav />

        <Menu cookies={cookies} />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.URL_LOCAL}/api/menu`);
  const { cookies, toasts, juices } = await res.json();

  return {
    props: {
      cookies,
      toasts,
      juices,
    },
  };
};
