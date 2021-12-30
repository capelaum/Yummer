import { formatPrice, renderProductName } from "utils/format";

import { useCart } from "contexts/CartContext";

import { ItemAmount } from "components/ItemAmount";
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
                menuType="cartMobile"
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

              <ItemAmount productId={id} amount={amount} />
            </ProductInfo>
          </Product>
        ),
      )}
    </CartMobileContainer>
  );
}
