import Image from "next/image";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import yummer_icon from "@public/Logos/yummer_orange_icon.svg";

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
          <div>
            <Image src={yummer_icon} alt="Yummer" title="Yummer" />
          </div>
          <div className="info">
            <a href="mailto:contato.yummer@gmail.com">
              contato.yummer@gmail.com
            </a>
            <span>Brasília - DF</span>
          </div>
        </ContentLeft>

        <ContentCenter>
          <a href="#banner">Início</a>
          <div className="social_icons">
            <a
              href="https://api.whatsapp.com/send?phone=+556181413648&text=Olá gostaria de saber mais sobre o Yummer e suas delícias 😋"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.instagram.com/yummerbrasil"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
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
