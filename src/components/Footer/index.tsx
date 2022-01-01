import Image from "next/image";

import yummer_icon from "@public/Logos/yummer_orange_icon.svg";

import { SocialIcons } from "components/SocialIcons";

import useWindowDimensions from "hooks/useWindowDimensions";

import {
  Container,
  Content,
  ContentCenter,
  ContentLeft,
  ContentRight,
} from "./styles";

export function Footer() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Content>
        {width < 768 && (
          <ContentCenter>
            <a href="#banner">Início</a>
          </ContentCenter>
        )}

        <ContentLeft>
          <div className="yummer_icon">
            <Image src={yummer_icon} alt="Yummer" title="Yummer" />
          </div>
          {width < 768 && <SocialIcons />}

          <div className="info">
            <a href="mailto:contato.yummer@gmail.com">
              contato.yummer@gmail.com
            </a>
            <span>Brasília - DF</span>
          </div>
        </ContentLeft>

        {width >= 768 && (
          <ContentCenter>
            <a href="#banner">Início</a>
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
            >
              Luís Vinicius Capelletto
            </a>
          </span>
        </ContentRight>
      </Content>
    </Container>
  );
}
