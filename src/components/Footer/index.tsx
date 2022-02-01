import { RefObject } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import yummer_icon from "@public/Logos/yummer_orange_icon.svg";

import useWindowDimensions from "hooks/useWindowDimensions";

import { SocialIcons } from "components/SocialIcons";

import { Container, Content, ContentLeft, ContentRight } from "./styles";
import { FooterCenter } from "components/FooterCenter";

interface FooterProps {
  scrollToRef?: (ref: RefObject<HTMLElement>) => void;
  bannerRef?: RefObject<HTMLElement>;
}

export function Footer({ scrollToRef, bannerRef }: FooterProps) {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Content>
        {width < 768 && (
          <FooterCenter scrollToRef={scrollToRef} bannerRef={bannerRef} />
        )}

        <ContentLeft>
          <div className="yummer_icon">
            <Image src={yummer_icon} alt="Yummer" title="Yummer" />
          </div>
          {width < 768 && <SocialIcons />}

          <div className="info">
            <a href="mailto:contatoyummer@gmail.com" title="Yummer E-mail">
              contato.yummer@gmail.com
            </a>
            <span>Brasília - DF</span>
          </div>
        </ContentLeft>

        {width >= 768 && (
          <>
            <FooterCenter scrollToRef={scrollToRef} bannerRef={bannerRef}>
              <SocialIcons />
            </FooterCenter>
          </>
        )}

        <ContentRight>
          <span>Yummer © 2022</span>
          <span>
            Feito com 🧡 por
            <a
              href="https://github.com/capelaum"
              target="_blank"
              rel="noreferrer"
              title="Github - Luís V. Capelletto"
            >
              Luís Vinicius Capelletto
            </a>
          </span>
        </ContentRight>
      </Content>
    </Container>
  );
}
