import { useState } from "react";
import Image from "next/image";

import { images } from "constants/images";

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
            ? images.cookies_icon_orange
            : images.cookies_icon;
        name = "Cookies";
        break;
      case "toast":
        icon =
          isHoveringOnThisType && isNotActive
            ? images.toasts_icon_orange
            : images.toasts_icon;
        name = "Rabanadas";
        break;
      case "juice":
        icon =
          isHoveringOnThisType && isNotActive
            ? images.juice_icon_orange
            : images.juice_icon;
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
