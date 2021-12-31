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
  function renderMenuNavButton(type: ProductTypes) {
    let icon: StaticImageData, name: string;

    switch (type) {
      case "cookie":
        icon = cookies_icon;
        name = "Cookies";
        break;
      case "toast":
        icon = toasts_icon;
        name = "Rabanadas";
        break;
      case "juice":
        icon = juice_icon;
        name = "Sucos";
        break;

      default:
        break;
    }

    return (
      <MenuNavButton
        title={name}
        isActive={activeItem === type}
        onClick={() => handleSetActiveItem(type)}
      >
        <div className="MenuNavButtonIcon">
          <Image src={icon} alt={`${name} icon`} />
        </div>
        <span>{name}</span>
      </MenuNavButton>
    );
  }

  return (
    <MenuNavContainer>
      {renderMenuNavButton("cookie")}
      {renderMenuNavButton("toast")}
      {renderMenuNavButton("juice")}
    </MenuNavContainer>
  );
}
