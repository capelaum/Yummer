import Image from "next/image";

import { images } from "constants/images";

import useWindowDimensions from "hooks/useWindowDimensions";

import { SocialIcons } from "components/SocialIcons";

import { Container, Content, ContentLeft, ContentRight } from "./styles";
import { FooterCenter } from "components/FooterCenter";

export function Footer() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Content>
        {width < 768 && <FooterCenter />}

        <ContentLeft>
          <div className="yummer_icon">
            <Image src={images.yummer_icon} alt="Yummer" title="Yummer" />
          </div>
          {width < 768 && <SocialIcons />}

          <div className="info">
            <a href="mailto:contatoyummer@gmail.com" title="Yummer E-mail">
              contatoyummer@gmail.com
            </a>
            <span>Brasília - DF</span>
          </div>
        </ContentLeft>

        {width >= 768 && (
          <>
            <FooterCenter>
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
