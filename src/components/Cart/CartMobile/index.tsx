import { formatPrice, renderProductName } from "utils/format";

import { useCart } from "contexts/CartContext";

import { CartAmountButton } from "components/Cart/CartAmountButton";
import { ProductImage } from "components/ProductImage";

import {
  CartMobileContainer,
  Product,
  ProductHeader,
  ProductInfo,
  ProductSubtotal,
  ProductTitle,
} from "./styles";

export function CartMobile() {
  const { sortedCart } = useCart();

  return (
    <CartMobileContainer>
      {sortedCart.map(
        ({ id, name, type, imageSrc, size, price, priceFormated, amount }) => (
          <Product key={id}>
            <ProductHeader>
              <ProductImage
                name={name}
                type={type}
                imageSrc={imageSrc}
                menuType="cart"
              />
              <ProductTitle>
                <h1>{renderProductName(name, size)}</h1>
                <span>{priceFormated}</span>
              </ProductTitle>
            </ProductHeader>

            <ProductInfo>
              <ProductSubtotal>
                <strong>SUBTOTAL</strong>
                <span>{formatPrice(amount * price)}</span>
              </ProductSubtotal>

              <CartAmountButton productId={id} amount={amount} />
            </ProductInfo>
          </Product>
        ),
      )}
    </CartMobileContainer>
  );
}
