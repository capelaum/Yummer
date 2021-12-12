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
        <div className="MenuNavButtonIcon">
          <Image src={cookies_icon} alt="Cookies icon" />
        </div>
        <span>Cookies</span>
      </MenuNavButton>
      <MenuNavButton
        isActive={activeItem === "toasts"}
        onClick={() => handleSetActiveItem("toasts")}
      >
        <div className="MenuNavButtonIcon">
          <Image src={toasts_icon} alt="Rabanadas icon" />
        </div>
        <span>Rabanadas</span>
      </MenuNavButton>
      <MenuNavButton
        isActive={activeItem === "juices"}
        onClick={() => handleSetActiveItem("juices")}
      >
        <div className="MenuNavButtonIcon">
          <Image src={juice_icon} alt="Sucos icon" />
        </div>
        <span>Sucos</span>
      </MenuNavButton>
    </MenuNavContainer>
  );
}
