import { useState } from "react";

import { Product, ProductTypes } from "utils/types";

import { MenuItem } from "components/MenuItem";
import { Switch } from "components/Switch";
import { MenuNav } from "components/MenuNav";
import { CartButton } from "components/CartButton";

import { useCart } from "contexts/CartContext";

import { MenuContainer, MenuItemContainer, MenuItemsContainer } from "./styles";

interface MenuProps {
  menu: Product[];
}

export function Menu({ menu }: MenuProps) {
  const [activeItem, setActiveItem] = useState<ProductTypes>("cookie");
  const [size, setSize] = useState<100 | 45>(100);
  const { cartSize } = useCart();

  function toggleSize() {
    setSize(size === 100 ? 45 : 100);
  }

  function handleSetActiveItem(item: ProductTypes) {
    setActiveItem(item);
  }

  function renderMenu(products: Product[], productType: string, size?: number) {
    const filteredProducts = products.filter(
      (product) => product.type === productType && product?.size === size,
    );

    return filteredProducts.map((product) => {
      return (
        <MenuItem
          key={product.id}
          product={product}
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

      {cartSize > 0 && <CartButton cartSize={cartSize} />}

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
