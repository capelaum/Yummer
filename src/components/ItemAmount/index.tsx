import { ItemAmountButton } from "./styles";

import { FiPlus, FiMinus } from "react-icons/fi";

import { useCart } from "contexts/CartContext";

interface ItemAmountProps {
  amount: number;
  productId: number;
}

export function ItemAmount({ amount, productId }: ItemAmountProps) {
  const { updateProductAmount } = useCart();

  return (
    <ItemAmountButton>
      <button
        className="minus_btn"
        onClick={() => updateProductAmount(productId, amount - 1)}
      >
        <FiMinus size={18} />
      </button>
      <span>{amount}</span>
      <button
        className="plus_btn"
        onClick={() => updateProductAmount(productId, amount + 1)}
      >
        <FiPlus size={18} />
      </button>
    </ItemAmountButton>
  );
}
