import { MdOutlineAddShoppingCart } from "react-icons/md";

import { AddCartBtn } from "./styles";

interface AddCartBtn {
  show: boolean;
}

export function AddCartButton({ show }) {
  return (
    <AddCartBtn show={show}>
      <MdOutlineAddShoppingCart className="addCartIcon" />
      <span>0</span>
    </AddCartBtn>
  );
}
