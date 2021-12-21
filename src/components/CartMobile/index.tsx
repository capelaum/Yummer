import { formatPrice } from "utils/format";

import { useCart } from "contexts/CartContext";
import useWindowDimensions from "hooks/useWindowDimensions";

import { ItemAmount } from "components/ItemAmount";
import { DeleteButton } from "components/DeleteButton";
import { ProductImage } from "components/ProductImage";

import {
  CartMobileContainer,
  Product,
  ProductAmount,
  ProductHeader,
  ProductInfo,
  ProductSubtotal,
  ProductTitle,
} from "./styles";

interface CartMobileProps {
  renderProductName: (name: string, size: number) => string;
}

export function CartMobile({ renderProductName }: CartMobileProps) {
  const { sortedCart } = useCart();
  const { width } = useWindowDimensions();

  return (
    <CartMobileContainer show={width < 768}>
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

              <ProductAmount>
                <ItemAmount productId={id} amount={amount} />
                <DeleteButton productId={id} size={20} />
              </ProductAmount>
            </ProductInfo>
          </Product>
        ),
      )}
    </CartMobileContainer>
  );
}
