import { CartAmountButtonContainer } from "./styles";

import { FiPlus, FiMinus } from "react-icons/fi";

import { useCart } from "contexts/CartContext";

interface CartAmountButtonProps {
  amount: number;
  productId: number;
}

export function CartAmountButton({ amount, productId }: CartAmountButtonProps) {
  const { updateProductAmount } = useCart();

  return (
    <CartAmountButtonContainer>
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
    </CartAmountButtonContainer>
  );
}
