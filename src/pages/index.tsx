import Head from "next/head";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";

import useInView from "react-cool-inview";

import { Information, Product, Testimonial } from "utils/types";

import { Menu } from "components/Menu";
import { Banner } from "components/Banner";
import { Informations } from "components/Informations";
import { Testimonials } from "components/Testimonials";
import { InstaWidget } from "components/InstaWidget";

// const InstaWidget = dynamic(() => import("components/InstaWidget"));

import { Container } from "styles/home";

interface MenuProps {
  menu: Product[];
  informations: Information[];
  testimonials: Testimonial[];
}

export default function Home({ menu, informations, testimonials }: MenuProps) {
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    unobserveOnEnter: true,
  });
  console.log("🚀 ~ inView", inView);

  return (
    <>
      <Head>
        <title>Yummer</title>
      </Head>
      <Container>
        <Banner />
s
        <Menu menu={menu} />

        <Informations informations={informations} observe={observe} />

        <InstaWidget />
        <Testimonials testimonials={testimonials} />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const menu = await fetch(`${process.env.URL_LOCAL}/api/menu`).then((res) =>
    res.json(),
  );

  const informations = await fetch(
    `${process.env.URL_LOCAL}/api/informations`,
  ).then((res) => res.json());

  const testimonials = await fetch(
    `${process.env.URL_LOCAL}/api/testimonials`,
  ).then((res) => res.json());

  return {
    props: {
      menu,
      informations,
      testimonials,
    },
  };
};
