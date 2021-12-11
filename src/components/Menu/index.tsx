import { useState } from "react";

import { menuItemType } from "utils/types";

import { MenuItem } from "components/MenuItem";
import { Switch } from "components/Switch";

import { MenuContainer, MenuItemContainer } from "./styles";

interface MenuProps {
  cookies: menuItemType[];
  toasts: menuItemType[];
  juices: menuItemType[];
}

export function Menu({ cookies, toasts, juices }: MenuProps) {
  const [size, setSize] = useState<100 | 45>(100);

  function toggleSize() {
    setSize(size === 100 ? 45 : 100);
  }

  function renderMenuItems(
    menuItems: menuItemType[],
    itemType: string,
    size?: number,
  ) {
    const filteredMenuItems = menuItems.filter(
      (menuItem) => menuItem?.size === size,
    );

    const imageWidth =
      itemType === "Cookies" ? 100 : itemType === "Toasts" ? 150 : 80;
    const imageHeight =
      itemType === "Cookies" ? 100 : itemType === "Toasts" ? 80 : 120;

    return filteredMenuItems.map(
      ({ name, price, description, imageName }, index) => (
        <MenuItem
          key={`${name}-${index}`}
          name={name}
          price={price}
          description={description}
          imageName={imageName}
          itemType={itemType}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          isOrange={itemType === "Toasts"}
        />
      ),
    );
  }

  return (
    <MenuContainer>
      <MenuItemContainer>
        <Switch size={size} toggleSize={toggleSize} />
        {renderMenuItems(cookies, "Cookies", size)}
      </MenuItemContainer>
      <MenuItemContainer isOrange>
        {renderMenuItems(toasts, "Toasts")}
      </MenuItemContainer>
      <MenuItemContainer>{renderMenuItems(juices, "Juices")}</MenuItemContainer>
    </MenuContainer>
  );
}
