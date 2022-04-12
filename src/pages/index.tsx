import { Banner } from "@sections/Banner";
import { Informations } from "@sections/Informations";
import { InstaWidgetProps } from "@sections/InstaWidget";
import { Menu } from "@sections/Menu";
import { Parallax } from "@sections/Parallax";
import { Testimonials } from "@sections/Testimonials";
import { VideoSection } from "@sections/VideoSection";
import { Footer } from "components/Footer";
import dynamic from "next/dynamic";
import Head from "next/head";
import useInView from "react-cool-inview";
import { BgContainer, Container } from "styles/home";

const InstaWidget = dynamic<InstaWidgetProps>(
  async () => {
    return import("components/Sections/InstaWidget").then(
      (mod) => mod.InstaWidget,
    );
  },
  { loading: () => <span>Carregando...</span> },
);

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
          <BgContainer>
            <VideoSection />
            <Menu />
          </BgContainer>

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
