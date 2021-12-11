import Image from "next/image";

import cookies_icon from "@public/Menu/Icons/cookies_icon.svg";
import toasts_icon from "@public/Menu/Icons/toasts_icon.svg";
import juice_icon from "@public/Menu/Icons/juice_icon.svg";

import { MenuNavButton, MenuNavContainer } from "./styles";

export function MenuNav() {
  return (
    <MenuNavContainer>
      <MenuNavButton>
        <Image src={cookies_icon} alt="Cookies icon" />
        <span>Cookies</span>
      </MenuNavButton>
      <MenuNavButton>
        <Image src={toasts_icon} alt="Rabanadas icon" />
        <span>Rabanadas</span>
      </MenuNavButton>
      <MenuNavButton>
        <Image src={juice_icon} alt="Sucos icon" />
        <span>Sucos</span>
      </MenuNavButton>
    </MenuNavContainer>
  );
}
