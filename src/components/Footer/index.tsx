import { RefObject } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import yummer_icon from "@public/Logos/yummer_orange_icon.svg";

import useWindowDimensions from "hooks/useWindowDimensions";

import { SocialIcons } from "components/SocialIcons";

import {
  Container,
  Content,
  ContentCenter,
  ContentLeft,
  ContentRight,
} from "./styles";

interface FooterProps {
  scrollToRef?: (ref: RefObject<HTMLElement>) => void;
  menuRef?: RefObject<HTMLElement>;
  bannerRef?: RefObject<HTMLElement>;
}

export function Footer({ scrollToRef, menuRef, bannerRef }: FooterProps) {
  const { width } = useWindowDimensions();
  const router = useRouter();

  function setLinkText() {
    return router.pathname === "/cart" ? "Home" : "Início";
  }
  function setLink() {
    return router.pathname === "/cart"
      ? router.push("/")
      : scrollToRef(bannerRef);
  }

  return (
    <Container>
      <Content>
        {width < 768 && (
          <ContentCenter>
            <a title={setLinkText()} onClick={setLink}>
              {setLinkText()}
            </a>
          </ContentCenter>
        )}

        <ContentLeft>
          <div className="yummer_icon">
            <Image src={yummer_icon} alt="Yummer" title="Yummer" />
          </div>
          {width < 768 && <SocialIcons />}

          <div className="info">
            <a href="mailto:contato.yummer@gmail.com" title="Yummer E-mail">
              contato.yummer@gmail.com
            </a>
            <span>Brasília - DF</span>
          </div>
        </ContentLeft>

        {width >= 768 && (
          <ContentCenter>
            <a title={setLinkText()} onClick={setLink}>
              {setLinkText()}
            </a>
            <SocialIcons />
          </ContentCenter>
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
