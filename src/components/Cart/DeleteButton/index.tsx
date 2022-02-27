import { useCart } from "contexts/CartContext";
import { MdDelete } from "react-icons/md";

import { DeleteBtn } from "./styles";

interface DeleteButtonProps {
  productId: number;
  size: number;
}

export function DeleteButton({ productId, size }: DeleteButtonProps) {
  const { removeProduct } = useCart();

  return (
    <DeleteBtn
      type="button"
      onClick={() => removeProduct(productId)}
      title="Remover"
    >
      <MdDelete size={size} color={"var(--color-secondary)"} />
    </DeleteBtn>
  );
}
