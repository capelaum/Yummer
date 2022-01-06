import { createRef, RefObject, useRef } from "react";
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

const InstaWidget = dynamic<InstaWidgetProps>(
  async () => {
    return import("components/InstaWidget").then((mod) => mod.InstaWidget);
  },

  {
    loading: () => <span>Carregando...</span>,
    ssr: false,
  },
);

import { Container } from "styles/home";

export default function Home() {
  const { observe, inView, scrollDirection, entry } = useInView({
    unobserveOnEnter: true,
  });

  const menuRef = createRef<HTMLElement>();
  const bannerRef = createRef<HTMLElement>();

  const scrollToRef = (ref: RefObject<HTMLElement>) =>
    window.scrollTo(0, ref.current.offsetTop);

  return (
    <>
      <Head>
        <title>Yummer</title>
      </Head>
      <Container>
        <Banner scrollToRef={scrollToRef} menuRef={menuRef} ref={bannerRef} />
        <main>
          <Menu ref={menuRef} />

          <Informations observe={observe} />

          {inView && <InstaWidget />}

          <Testimonials />
          <VideoSection />
        </main>
        <Footer
          scrollToRef={scrollToRef}
          menuRef={menuRef}
          bannerRef={bannerRef}
        />
      </Container>
    </>
  );
}
