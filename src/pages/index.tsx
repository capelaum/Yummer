import Head from "next/head";
import dynamic from "next/dynamic";

import useInView from "react-cool-inview";

import { Banner } from "components/Banner";
import { Menu } from "components/Menu";
import { Informations } from "components/Informations";
import { Testimonials } from "components/Testimonials";
import { VideoSection } from "components/VideoSection";
import { Footer } from "components/Footer";

const InstaWidget = dynamic(() => import("components/InstaWidget"));

import { Container } from "styles/home";

export default function Home() {
  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    unobserveOnEnter: true,
  });

  return (
    <>
      <Head>
        <title>Yummer</title>
      </Head>
      <Container>
        <Banner />
        <Menu />

        <Informations observe={observe} />

        {inView && <InstaWidget />}
        <Testimonials />
        <VideoSection />
        <Footer />
      </Container>
    </>
  );
}
