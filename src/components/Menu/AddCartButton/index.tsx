import { MdOutlineAddShoppingCart } from "react-icons/md";

import { useCart } from "contexts/CartContext";

import { AddCartBtn } from "./styles";

interface AddCartButtonProps {
  productId: number;
  show: boolean;
}

export function AddCartButton({ productId, show }: AddCartButtonProps) {
  const { addProduct, cartItemsAmount } = useCart();

  return (
    <AddCartBtn show={show} onClick={() => addProduct(productId)}>
      <MdOutlineAddShoppingCart
        className="addCartIcon"
        size={24}
        color={"var(--color-primary)"}
      />
      <span>{cartItemsAmount[productId] || 0}</span>
    </AddCartBtn>
  );
}
