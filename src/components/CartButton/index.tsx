import { MdOutlineShoppingCart } from "react-icons/md";

import { CartButtonContainer } from "./styles";

interface CartButtonProps {
  cartSize: number;
}

export function CartButton({ cartSize }: CartButtonProps) {
  return (
    <CartButtonContainer>
      <MdOutlineShoppingCart />
      <span>{cartSize}</span>
    </CartButtonContainer>
  );
}
