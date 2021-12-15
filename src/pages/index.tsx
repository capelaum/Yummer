import Head from "next/head";
import { GetStaticProps } from "next";

import { Information, Product } from "utils/types";

import { Menu } from "components/Menu";
import { Banner } from "components/Banner";

import { Container } from "styles/home";
import { Informations } from "components/Informations";

interface MenuProps {
  menu: Product[];
  informations: Information[];
}

export default function Home({ menu, informations }: MenuProps) {
  return (
    <>
      <Head>
        <title>Yummer</title>
      </Head>
      <Container>
        <Banner />

        <Menu menu={menu} />

        <Informations informations={informations} />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const menuData = await fetch(`${process.env.URL_LOCAL}/api/menu`);
  const menu = await menuData.json();

  const informationsData = await fetch(
    `${process.env.URL_LOCAL}/api/informations`,
  );
  const informations = await informationsData.json();

  return {
    props: {
      menu,
      informations,
    },
  };
};
