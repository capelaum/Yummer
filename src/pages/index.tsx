import { Footer } from "components/Footer";
import { Banner } from "components/Sections/Banner";
import { Informations } from "components/Sections/Informations";
import { InstaWidgetProps } from "components/Sections/InstaWidget";
import { Menu } from "components/Sections/Menu";
import { Parallax } from "components/Sections/Parallax";
import { Testimonials } from "components/Sections/Testimonials";
import { VideoSection } from "components/Sections/VideoSection";
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
