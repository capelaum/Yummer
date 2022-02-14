import { useState } from "react";
import Image from "next/image";

import cookies_icon from "@public/Menu/Icons/cookies_icon_white.svg";
import toasts_icon from "@public/Menu/Icons/toasts_icon_white.svg";
import juice_icon from "@public/Menu/Icons/juice_icon_white.svg";

import cookies_icon_orange from "@public/Menu/Icons/cookies_icon_orange.svg";
import toasts_icon_orange from "@public/Menu/Icons/toasts_icon_orange.svg";
import juice_icon_orange from "@public/Menu/Icons/juice_icon_orange.svg";

import { ProductTypes } from "utils/types";

import { MenuNavButton, MenuNavContainer } from "./styles";

interface MenuNavProps {
  handleSetActiveItem: (item: ProductTypes) => void;
  activeItem: ProductTypes;
}

export function MenuNav({ handleSetActiveItem, activeItem }: MenuNavProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringType, setIsHoveringType] = useState<ProductTypes>("cookie");

  function renderMenuNavButton(type: ProductTypes) {
    let icon: StaticImageData, name: string;

    const isNotActive = !(activeItem === type);
    const isHoveringOnThisType = isHovering && isHoveringType === type;

    switch (type) {
      case "cookie":
        icon =
          isHoveringOnThisType && isNotActive
            ? cookies_icon_orange
            : cookies_icon;
        name = "Cookies";
        break;
      case "toast":
        icon =
          isHoveringOnThisType && isNotActive
            ? toasts_icon_orange
            : toasts_icon;
        name = "Rabanadas";
        break;
      case "juice":
        icon =
          isHoveringOnThisType && isNotActive ? juice_icon_orange : juice_icon;
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
        onMouseEnter={() => {
          setIsHovering(true);
          setIsHoveringType(type);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          setIsHoveringType(type);
        }}
      >
        <div className="MenuNavButtonIcon">
          <Image src={icon} alt={`${name} icon`} className="icon" />
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
