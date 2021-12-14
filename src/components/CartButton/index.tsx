import { MdOutlineShoppingCart } from "react-icons/md";

import { CartButtonContainer } from "./styles";

export function CartButton() {
  return (
    <CartButtonContainer>
      <MdOutlineShoppingCart />
      <span>1</span>
    </CartButtonContainer>
  );
}
