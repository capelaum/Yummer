import Head from "next/head";
import { GetStaticProps } from "next";

import { Information, menuItemType } from "utils/types";

import { Menu } from "components/Menu";
import { Banner } from "components/Banner";

import { Container } from "styles/home";
import { Informations } from "components/Informations";

interface MenuProps {
  cookies: menuItemType[];
  toasts: menuItemType[];
  juices: menuItemType[];
  informations: Information[];
}

export default function Home({
  cookies,
  toasts,
  juices,
  informations,
}: MenuProps) {
  return (
    <>
      <Head>
        <title>Yummer</title>
      </Head>
      <Container>
        <Banner />

        <Menu cookies={cookies} toasts={toasts} juices={juices} />

        <Informations informations={informations} />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const menu = await fetch(`${process.env.URL_LOCAL}/api/menu`);
  const { cookies, toasts, juices } = await menu.json();

  const informationsData = await fetch(
    `${process.env.URL_LOCAL}/api/informations`,
  );
  const informations = await informationsData.json();

  return {
    props: {
      cookies,
      toasts,
      juices,
      informations,
    },
  };
};
