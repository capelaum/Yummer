import Head from "next/head";
import dynamic from "next/dynamic";

import useInView from "react-cool-inview";

import { Banner } from "components/Banner";
import { Menu } from "components/Menu";
import { Informations } from "components/Informations";
import { Testimonials } from "components/Testimonials";
// import { InstaWidget } from "components/InstaWidget";
import { VideoSection } from "components/VideoSection";
import { Footer } from "components/Footer";
import { InstaWidgetProps } from "components/InstaWidget";
import { Parallax } from "components/Parallax";

const InstaWidget = dynamic<InstaWidgetProps>(
  async () => {
    return import("components/InstaWidget").then((mod) => mod.InstaWidget);
  },
  { loading: () => <span>Carregando...</span> },
);

import { Container } from "styles/home";

export default function Home() {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  return (
    <>
      <Head>
        <title>Yummer</title>
      </Head>
      <Container>
        <Banner />
        <main>
          <VideoSection />
          <Menu />

          <Informations observe={observe} />

          <Parallax />
          <Testimonials />
          {inView && <InstaWidget />}
        </main>
        <Footer />
      </Container>
    </>
  );
}
