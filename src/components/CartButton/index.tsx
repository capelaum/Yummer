import { useCart } from "contexts/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";

import { CartButtonContainer } from "./styles";

export function CartButton() {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <CartButtonContainer>
      <MdOutlineShoppingCart />
      <span>{cartSize}</span>
    </CartButtonContainer>
  );
}
