import { ItemAmountButton } from "./styles";

import { FiPlus, FiMinus } from "react-icons/fi";

interface ItemAmountProps {
  amount: number;
}

export function ItemAmount({ amount }: ItemAmountProps) {
  return (
    <ItemAmountButton>
      <button className="minus_btn">
        <FiMinus size={18} />
      </button>
      <span>{amount}</span>
      <button className="plus_btn">
        <FiPlus size={18} />
      </button>
    </ItemAmountButton>
  );
}
