import { useState } from "react";
import Image from "next/image";

import cookies_icon from "@public/Menu/Icons/cookies_icon.svg";
import toasts_icon from "@public/Menu/Icons/toasts_icon.svg";
import juice_icon from "@public/Menu/Icons/juice_icon.svg";

import { itemType } from "utils/types";

import { MenuNavButton, MenuNavContainer } from "./styles";

interface MenuNavProps {
  handleSetActiveItem: (item: itemType) => void;
  activeItem: itemType;
}

export function MenuNav({ handleSetActiveItem, activeItem }: MenuNavProps) {
  return (
    <MenuNavContainer>
      <MenuNavButton
        isActive={activeItem === "cookies"}
        onClick={() => handleSetActiveItem("cookies")}
      >
        <Image
          src={cookies_icon}
          alt="Cookies icon"
          className="MenuNavButtonIcon"
        />
        <span>Cookies</span>
      </MenuNavButton>
      <MenuNavButton
        isActive={activeItem === "toasts"}
        onClick={() => handleSetActiveItem("toasts")}
      >
        <Image
          src={toasts_icon}
          alt="Rabanadas icon"
          className="MenuNavButtonIcon"
        />
        <span>Rabanadas</span>
      </MenuNavButton>
      <MenuNavButton
        isActive={activeItem === "juices"}
        onClick={() => handleSetActiveItem("juices")}
      >
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
