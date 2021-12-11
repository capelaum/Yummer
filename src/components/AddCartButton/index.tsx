import { MdOutlineAddShoppingCart } from "react-icons/md";

import { AddCartBtn } from "./styles";

export function AddCartButton() {
  return (
    <AddCartBtn>
      <MdOutlineAddShoppingCart className="addCartIcon" />
      <span>0</span>
    </AddCartBtn>
  );
}
