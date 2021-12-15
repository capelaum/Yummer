import { useState } from "react";

import { ProductType, Product } from "utils/types";

import { MenuItem } from "components/MenuItem";
import { Switch } from "components/Switch";

import { MenuContainer, MenuItemContainer, MenuItemsContainer } from "./styles";
import { MenuNav } from "components/MenuNav";
import useWindowDimensions from "hooks/useWindowDimensions";
import { CartButton } from "components/CartButton";

interface MenuProps {
  cookies: Product[];
  toasts: Product[];
  juices: Product[];
}

export function Menu({ cookies, toasts, juices }: MenuProps) {
  const [activeItem, setActiveItem] = useState<ProductType>("cookies");
  const [size, setSize] = useState<100 | 45>(100);
  const { width } = useWindowDimensions();

  function toggleSize() {
    setSize(size === 100 ? 45 : 100);
  }

  function handleSetActiveItem(item: ProductType) {
    setActiveItem(item);
  }

  function getImageSize(itemType: string) {
    let imageWidth: number, imageHeight: number;

    if (width >= 768) {
      imageWidth =
        itemType === "Cookies" ? 100 : itemType === "Toasts" ? 150 : 75;
      imageHeight =
        itemType === "Cookies" ? 100 : itemType === "Toasts" ? 80 : 120;
    } else {
      imageWidth =
        itemType === "Cookies" ? 150 : itemType === "Toasts" ? 220 : 90;
      imageHeight =
        itemType === "Cookies" ? 150 : itemType === "Toasts" ? 130 : 150;
    }

    return { imageWidth, imageHeight };
  }

  function renderMenuItems(
    menuItems: Product[],
    itemType: string,
    size?: number,
  ) {
    const filteredMenuItems = menuItems.filter(
      (menuItem) => menuItem?.size === size,
    );

    const { imageWidth, imageHeight } = getImageSize(itemType);

    return filteredMenuItems.map(
      ({ name, priceFormated, description, imageName }, index) => (
        <MenuItem
          key={`${name}-${index}`}
          name={name}
          priceFormated={priceFormated}
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
    <MenuContainer id="menu">
      <MenuNav
        handleSetActiveItem={handleSetActiveItem}
        activeItem={activeItem}
      />

      <CartButton />

      <MenuItemsContainer>
        <MenuItemContainer isActive={activeItem === "cookies"}>
          <Switch size={size} toggleSize={toggleSize} />
          {renderMenuItems(cookies, "Cookies", size)}
        </MenuItemContainer>

        <MenuItemContainer isOrange isActive={activeItem === "toasts"}>
          {renderMenuItems(toasts, "Toasts")}
        </MenuItemContainer>

        <MenuItemContainer isActive={activeItem === "juices"}>
          {renderMenuItems(juices, "Juices")}
        </MenuItemContainer>
      </MenuItemsContainer>
    </MenuContainer>
  );
}
