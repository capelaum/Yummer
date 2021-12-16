import { formatPrice } from "utils/format";

import { useCart } from "contexts/CartContext";

import { CartFooterContainer, Total } from "./styles";

export function CartFooter() {
  const { cartTotal } = useCart();

  return (
    <CartFooterContainer>
      <button type="button">FINALIZAR PEDIDO</button>

      <Total>
        <span>TOTAL</span>
        <strong className="checkout_total">{formatPrice(cartTotal)}</strong>
      </Total>
    </CartFooterContainer>
  );
}
