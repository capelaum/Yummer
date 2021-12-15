import { useState } from "react";

import { Product, ProductTypes } from "utils/types";

import { MenuItem } from "components/MenuItem";
import { Switch } from "components/Switch";

import { MenuContainer, MenuItemContainer, MenuItemsContainer } from "./styles";
import { MenuNav } from "components/MenuNav";
import useWindowDimensions from "hooks/useWindowDimensions";
import { CartButton } from "components/CartButton";

interface MenuProps {
  menu: Product[];
}

export function Menu({ menu }: MenuProps) {
  const [activeItem, setActiveItem] = useState<ProductTypes>("cookie");
  const [size, setSize] = useState<100 | 45>(100);
  const { width } = useWindowDimensions();

  function toggleSize() {
    setSize(size === 100 ? 45 : 100);
  }

  function handleSetActiveItem(item: ProductTypes) {
    setActiveItem(item);
  }

  function getImageSize(type: string) {
    let imageWidth: number, imageHeight: number;

    if (width >= 768) {
      imageWidth = type === "cookie" ? 100 : type === "toast" ? 150 : 75;
      imageHeight = type === "cookie" ? 100 : type === "toast" ? 80 : 120;
    } else {
      imageWidth = type === "cookie" ? 150 : type === "toast" ? 220 : 90;
      imageHeight = type === "cookie" ? 150 : type === "toast" ? 130 : 150;
    }

    return { imageWidth, imageHeight };
  }

  function renderMenu(products: Product[], filterType: string, size?: number) {
    const filteredProducts = products.filter(
      (product) => product.type === filterType && product?.size === size,
    );

    return filteredProducts.map((product) => {
      const { imageWidth, imageHeight } = getImageSize(product.type);

      return (
        <MenuItem
          key={product.id}
          product={product}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          isOrange={product.type === "toast"}
        />
      );
    });
  }

  return (
    <MenuContainer id="menu">
      <MenuNav
        handleSetActiveItem={handleSetActiveItem}
        activeItem={activeItem}
      />

      <CartButton />

      <MenuItemsContainer>
        <MenuItemContainer isActive={activeItem === "cookie"}>
          <Switch size={size} toggleSize={toggleSize} />
          {renderMenu(menu, "cookie", size)}
        </MenuItemContainer>

        <MenuItemContainer isOrange isActive={activeItem === "toast"}>
          {renderMenu(menu, "toast")}
        </MenuItemContainer>

        <MenuItemContainer isActive={activeItem === "juice"}>
          {renderMenu(menu, "juice")}
        </MenuItemContainer>
      </MenuItemsContainer>
    </MenuContainer>
  );
}
