import Head from "next/head";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";

import useInView from "react-cool-inview";

import { Information, Product } from "utils/types";

import { Menu } from "components/Menu";
import { Banner } from "components/Banner";
import { Informations } from "components/Informations";

const InstaWidget = dynamic(() => import("components/InstaWidget"));

import { Container } from "styles/home";

interface MenuProps {
  menu: Product[];
  informations: Information[];
}

export default function Home({ menu, informations }: MenuProps) {
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  console.log(inView);

  return (
    <>
      <Head>
        <title>Yummer</title>
      </Head>
      <Container>
        <Banner />

        <Menu menu={menu} />

        <Informations informations={informations} observe={observe} />

        {inView && <InstaWidget />}
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
