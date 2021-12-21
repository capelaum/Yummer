import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { Container } from "./styles";

export function SocialIcons() {
  return (
    <Container>
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
    </Container>
  );
}
