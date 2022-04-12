import { useCart } from "contexts/CartContext";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartButtonContainer } from "./styles";

export function CartButton() {
  const { cartSize } = useCart();

  return (
    <Link href="/cart" passHref>
      <CartButtonContainer>
        <MdOutlineShoppingCart />
        <span>{cartSize}</span>
      </CartButtonContainer>
    </Link>
  );
}
