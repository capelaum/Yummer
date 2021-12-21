import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";

import useInView from "react-cool-inview";

import { getMenu, getProductsType } from "./api/menu";
import { getInformations } from "./api/informations";
import { getTestimonials } from "./api/testimonials";

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
  menu: {
    cookies: Product[];
    toasts: Product[];
    juices: Product[];
  };
  informations: Information[];
  testimonials: Testimonial[];
}

export default function Home({ menu, informations, testimonials }: MenuProps) {
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    unobserveOnEnter: true,
  });
  const [loadWidget, setLoadWidget] = useState(false);

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

        <InstaWidget />
        <Testimonials testimonials={testimonials} />
        <VideoSection />
        <Footer />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<MenuProps> = async (ctx) => {
  const cookiesData = await getProductsType("cookie");
  const toastsData = await getProductsType("toast");
  const juicesData = await getProductsType("juice");
  const informations = await getInformations();
  const testimonials = await getTestimonials();

  const menu = {
    cookies: cookiesData,
    toasts: toastsData,
    juices: juicesData,
  };

  return {
    props: {
      menu,
      informations,
      testimonials,
    },
  };
};
