import Link from "next/link";

import { MdOutlineShoppingCart } from "react-icons/md";

import { CartButtonContainer } from "./styles";

interface CartButtonProps {
  cartSize: number;
}

export function CartButton({ cartSize }: CartButtonProps) {
  return (
    <Link href="/cart" passHref>
      <CartButtonContainer>
        <MdOutlineShoppingCart />
        <span>{cartSize}</span>
      </CartButtonContainer>
    </Link>
  );
}
