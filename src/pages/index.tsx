import Head from "next/head";
import { GetStaticProps } from "next";

import { menuItemType } from "utils/types";

import { Menu } from "components/Menu";
import { Banner } from "components/Banner";
import { MenuNav } from "components/MenuNav";

import { Container } from "styles/home";

interface MenuProps {
  cookies: menuItemType[];
  toasts: menuItemType[];
  juices: menuItemType[];
}

export default function Home({ cookies, toasts, juices }: MenuProps) {
  return (
    <>
      <Head>
        <title>Yummer</title>
      </Head>
      <Container>
        <Banner />

        <Menu cookies={cookies} toasts={toasts} juices={juices} />
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
