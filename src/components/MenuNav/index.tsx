import Image from "next/image";

import cookies_icon from "@public/Menu/Icons/cookies_icon.svg";
import toasts_icon from "@public/Menu/Icons/toasts_icon.svg";
import juice_icon from "@public/Menu/Icons/juice_icon.svg";

import { MenuNavButton, MenuNavContainer } from "./styles";

export function MenuNav() {
  return (
    <MenuNavContainer>
      <MenuNavButton isActive>
        <Image
          src={cookies_icon}
          alt="Cookies icon"
          className="MenuNavButtonIcon"
        />
        <span>Cookies</span>
      </MenuNavButton>
      <MenuNavButton>
        <Image
          src={toasts_icon}
          alt="Rabanadas icon"
          className="MenuNavButtonIcon"
        />
        <span>Rabanadas</span>
      </MenuNavButton>
      <MenuNavButton>
        <Image
          src={juice_icon}
          alt="Sucos icon"
          className="MenuNavButtonIcon"
        />
        <span>Sucos</span>
      </MenuNavButton>
    </MenuNavContainer>
  );
}
