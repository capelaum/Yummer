import { MdOutlineAddShoppingCart } from "react-icons/md";

import { useCart } from "contexts/CartContext";

import { AddCartBtn } from "./styles";

interface AddCartBtn {
  productId: number;
  show: boolean;
}

export function AddCartButton({ productId, show }) {
  const { addProduct, cart } = useCart();

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <AddCartBtn show={show} onClick={() => handleAddProduct(productId)}>
      <MdOutlineAddShoppingCart className="addCartIcon" />
      <span>0</span>
    </AddCartBtn>
  );
}
