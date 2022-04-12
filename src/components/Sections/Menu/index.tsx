import { CartButton } from "components/Cart/CartButton";
import { useCart } from "contexts/CartContext";
import { getMenuWithPriceFormated } from "pages/api/menu";
import { useState } from "react";
import { getMenuFormated } from "utils/format";
import { Product, ProductTypes, Size } from "utils/types";
import { JuiceSize } from "./JuiceSize";
import { MenuItem } from "./MenuItem";
import { MenuNav } from "./MenuNav";
import { MenuContainer, MenuItemContainer, MenuItemsContainer } from "./styles";
import { Switch } from "./Switch";

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
          <JuiceSize />
          {renderProducts(juices)}
        </MenuItemContainer>
      </MenuItemsContainer>
    </MenuContainer>
  );
}
