import { images } from "constants/images";
import { ProductTypes } from "utils/types";
import { MenuNavButton, MenuNavContainer } from "./styles";

interface MenuNavProps {
  handleSetActiveItem: (item: ProductTypes) => void;
  activeItem: ProductTypes;
}

const itemTypes = {
  cookie: {
    icon: images.cookies_icon,
    name: "Cookies",
    width: 35,
    height: 35,
  },
  toast: {
    icon: images.toasts_icon,
    name: "Rabanadas",
    width: 50,
    height: 35,
  },
  juice: {
    icon: images.juice_icon,
    name: "Sucos",
    width: 30,
    height: 40,
  },
};

export function MenuNav({ handleSetActiveItem, activeItem }: MenuNavProps) {
  function renderMenuNavButton(type: ProductTypes) {
    const { name, width, height } = itemTypes[type];

    return (
      <MenuNavButton
        title={name}
        isActive={activeItem === type}
        onClick={() => handleSetActiveItem(type)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/Sections/Menu/Icons/${type}_icon_white.svg`}
          alt={`${name} icon`}
          className="MenuNavButtonIcon"
          width={width}
          height={height}
        />

        <span>{name}</span>
      </MenuNavButton>
    );
  }

  return (
    <MenuNavContainer>
      {renderMenuNavButton("toast")}
      {renderMenuNavButton("cookie")}
      {renderMenuNavButton("juice")}
    </MenuNavContainer>
  );
}
