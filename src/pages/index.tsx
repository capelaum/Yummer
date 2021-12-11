import { GetStaticProps } from "next";
import Head from "next/head";

import { cookieType } from "../utils/types";

import { Banner } from "../components/Banner";
import { Cookies } from "../components/Cookies";

import { Container, Menu, MenuNav, MenuNavButton } from "../styles/home";

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

        <MenuNav>
          <MenuNavButton>Cookies</MenuNavButton>
          <MenuNavButton>Rabanadas</MenuNavButton>
          <MenuNavButton>Sucos</MenuNavButton>
        </MenuNav>
        <Menu>
          <Cookies cookies={cookies} />
        </Menu>
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
