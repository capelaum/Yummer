import { useState } from "react";

import { getMenuWithPriceFormated } from "pages/api/menu";

import { Product, ProductTypes, Size } from "utils/types";
import { getMenuFormated } from "utils/format";

import { MenuItem } from "components/MenuItem";
import { Switch } from "components/Switch";
import { MenuNav } from "components/MenuNav";
import { CartButton } from "components/CartButton";

import { useCart } from "contexts/CartContext";

import { MenuContainer, MenuItemContainer, MenuItemsContainer } from "./styles";

export function Menu() {
  const { cartSize } = useCart();
  const { cookies, toasts, juices } = getMenuFormated(
    getMenuWithPriceFormated(),
  );

  const [activeItem, setActiveItem] = useState<ProductTypes>("cookie");
  const [size, setSize] = useState<Size>(100);

  function toggleSize() {
    setSize(size === 100 ? 45 : 100);
  }

  function handleSetActiveItem(item: ProductTypes) {
    setActiveItem(item);
  }

  function renderProducts(products: Product[], size?: number) {
    const filteredProducts = products.filter(
      (product) => product?.size === size,
    );

    return filteredProducts.map((product: Product) => {
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
          {renderProducts(cookies, size)}
        </MenuItemContainer>

        <MenuItemContainer isOrange isActive={activeItem === "toast"}>
          {renderProducts(toasts)}
        </MenuItemContainer>

        <MenuItemContainer isActive={activeItem === "juice"}>
          {renderProducts(juices)}
        </MenuItemContainer>
      </MenuItemsContainer>
    </MenuContainer>
  );
}
