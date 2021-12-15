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
    const icon =
      type === "cookie"
        ? cookies_icon
        : type === "toast"
        ? toasts_icon
        : juice_icon;

    const name =
      type === "cookie" ? "Cookies" : type === "toast" ? "Rabanadas" : "Sucos";

    return (
      <MenuNavButton
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
