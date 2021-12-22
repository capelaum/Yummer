import { MdOutlineAddShoppingCart } from "react-icons/md";

import { useCart } from "contexts/CartContext";

import { AddCartBtn } from "./styles";

interface AddCartButtonProps {
  productId: number;
  amount: number;
  show: boolean;
}

export function AddCartButton({ productId, show, amount }: AddCartButtonProps) {
  const { addProduct } = useCart();

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <AddCartBtn show={show} onClick={() => handleAddProduct(productId)}>
      <MdOutlineAddShoppingCart
        className="addCartIcon"
        size={24}
        color={"var(--color-primary)"}
      />
      <span>{amount}</span>
    </AddCartBtn>
  );
}
