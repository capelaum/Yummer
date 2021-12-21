import Image from "next/image";

import yummer_icon from "@public/Logos/yummer_orange_icon.svg";

import { SocialIcons } from "components/SocialIcons";

import {
  Container,
  Content,
  ContentCenter,
  ContentLeft,
  ContentRight,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <ContentLeft>
          <Image src={yummer_icon} alt="Yummer" title="Yummer" />
          <div className="info">
            <a href="mailto:contato.yummer@gmail.com">
              contato.yummer@gmail.com
            </a>
            <span>Brasília - DF</span>
          </div>
        </ContentLeft>

        <ContentCenter>
          <a href="#banner">Início</a>
          <SocialIcons />
        </ContentCenter>

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
