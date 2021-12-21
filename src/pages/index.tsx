import { useEffect, useState } from "react";
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
import { VideoSection } from "components/VideoSection";
import { Footer } from "components/Footer";

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
  const [loadWidget, setLoadWidget] = useState(false);
  console.log("🚀 ~ inView", inView);

  useEffect(() => {
    setLoadWidget(true);
  }, []);

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

        <Testimonials testimonials={testimonials} />
        <VideoSection />
        <Footer />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const menu = await fetch(`${process.env.url_local}/api/menu`).then((res) =>
    res.json(),
  );

  const informations = await fetch(
    `${process.env.url_local}/api/informations`,
  ).then((res) => res.json());

  const testimonials = await fetch(
    `${process.env.url_local}/api/testimonials`,
  ).then((res) => res.json());

  return {
    props: {
      menu,
      informations,
      testimonials,
    },
  };
};
