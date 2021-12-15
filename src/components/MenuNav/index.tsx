import { useState } from "react";
import Image from "next/image";

import cookies_icon from "@public/Menu/Icons/cookies_icon.svg";
import toasts_icon from "@public/Menu/Icons/toasts_icon.svg";
import juice_icon from "@public/Menu/Icons/juice_icon.svg";

import { ProductTypes } from "utils/types";

import { MenuNavButton, MenuNavContainer } from "./styles";

interface MenuNavProps {
  handleSetActiveItem: (item: ProductTypes) => void;
  activeItem: ProductTypes;
}

export function MenuNav({ handleSetActiveItem, activeItem }: MenuNavProps) {
  return (
    <MenuNavContainer>
      <MenuNavButton
        isActive={activeItem === "cookie"}
        onClick={() => handleSetActiveItem("cookie")}
      >
        <div className="MenuNavButtonIcon">
          <Image src={cookies_icon} alt="Cookies icon" />
        </div>
        <span>Cookies</span>
      </MenuNavButton>
      <MenuNavButton
        isActive={activeItem === "toast"}
        onClick={() => handleSetActiveItem("toast")}
      >
        <div className="MenuNavButtonIcon">
          <Image src={toasts_icon} alt="Rabanadas icon" />
        </div>
        <span>Rabanadas</span>
      </MenuNavButton>
      <MenuNavButton
        isActive={activeItem === "juice"}
        onClick={() => handleSetActiveItem("juice")}
      >
        <div className="MenuNavButtonIcon">
          <Image src={juice_icon} alt="Sucos icon" />
        </div>
        <span>Sucos</span>
      </MenuNavButton>
    </MenuNavContainer>
  );
}
