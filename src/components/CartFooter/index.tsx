import { formatPrice } from "utils/format";

import { useCart } from "contexts/CartContext";

import { CartFooterContainer, Total } from "./styles";

interface CartFooterProps {
  onOpenCheckoutModal: () => void;
}

export function CartFooter({ onOpenCheckoutModal }) {
  const { cartTotal } = useCart();

  return (
    <CartFooterContainer>
      <button type="button" onClick={onOpenCheckoutModal}>
        FINALIZAR PEDIDO
      </button>

      <Total>
        <span>TOTAL</span>
        <strong className="checkout_total">{formatPrice(cartTotal)}</strong>
      </Total>
    </CartFooterContainer>
  );
}
