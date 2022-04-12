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

  function getFilteredProductsBySize(products: Product[]) {
    return products.filter((product) =>
      product.type === "cookie" ? product.size === size : product,
    );
  }

  function renderProducts(products: Product[]) {
    const filteredProducts = getFilteredProductsBySize(products);

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

  function renderCartButtonIfCartSizeIsGreaterThanZero() {
    if (cartSize > 0) return <CartButton />;
  }

  return (
    <MenuContainer id="menu">
      <MenuNav
        handleSetActiveItem={handleSetActiveItem}
        activeItem={activeItem}
      />

      {renderCartButtonIfCartSizeIsGreaterThanZero()}

      <MenuItemsContainer>
        <MenuItemContainer isOrange isActive={activeItem === "toast"}>
          {renderProducts(toasts)}
        </MenuItemContainer>

        <MenuItemContainer isActive={activeItem === "cookie"}>
          <Switch size={size} toggleSize={toggleSize} />
          {renderProducts(cookies)}
        </MenuItemContainer>

        <MenuItemContainer isActive={activeItem === "juice"}>
          <JuiceSize />
          {renderProducts(juices)}
        </MenuItemContainer>
      </MenuItemsContainer>
    </MenuContainer>
  );
}
