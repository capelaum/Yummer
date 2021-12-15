import { MdOutlineAddShoppingCart } from "react-icons/md";

import { useCart } from "contexts/CartContext";

import { AddCartBtn } from "./styles";

interface AddCartButtonProps {
  productId: number;
  show: boolean;
}

export function AddCartButton({ productId, show }: AddCartButtonProps) {
  const { addProduct, cartItemsAmount } = useCart();

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <AddCartBtn show={show} onClick={() => handleAddProduct(productId)}>
      <MdOutlineAddShoppingCart className="addCartIcon" />
      <span>{cartItemsAmount[productId] || 0}</span>
    </AddCartBtn>
  );
}
