import Image from "next/image";

import { useCart } from "contexts/CartContext";

import useWindowDimensions from "hooks/useWindowDimensions";

import { formatPrice } from "utils/format";

import { ItemAmount } from "components/ItemAmount";
import { DeleteButton } from "components/DeleteButton";

import {
  CartMobileContainer,
  Product,
  ProductAmount,
  ProductHeader,
  ProductInfo,
  ProductSubtotal,
  ProductTitle,
} from "./styles";
import { generateShimmer } from "utils/shimmer";

interface CartMobileProps {
  renderProductName: (name: string, size: number) => string;
}

export function CartMobile({ renderProductName }: CartMobileProps) {
  const { sortedCart } = useCart();
  const { width } = useWindowDimensions();

  return (
    <CartMobileContainer show={width < 768}>
      {sortedCart.map(
        ({ id, name, type, imageName, size, price, priceFormated, amount }) => (
          <Product key={id}>
            <ProductHeader>
              <Image
                src={`/${type}/${imageName}`}
                alt={name}
                width={width >= 768 ? 100 : 60}
                height={width >= 768 ? 100 : 60}
                layout="fixed"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${generateShimmer(
                  width >= 768 ? 100 : 60,
                  width >= 768 ? 100 : 60,
                )}`}
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
