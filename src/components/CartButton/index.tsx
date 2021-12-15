import { useCart } from "contexts/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";

import { CartButtonContainer } from "./styles";

export function CartButton() {
  const { cartSize } = useCart();

  return (
    <CartButtonContainer>
      <MdOutlineShoppingCart />
      <span>{cartSize}</span>
    </CartButtonContainer>
  );
}
