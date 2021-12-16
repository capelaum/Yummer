import Image from "next/image";

import { ItemAmount } from "components/ItemAmount";
import { DeleteButton } from "components/DeleteButton";

import { formatPrice } from "utils/format";

import { useCart } from "contexts/CartContext";

import useWindowDimensions from "hooks/useWindowDimensions";

import { ProductTable } from "./styles";
import { generateShimmer } from "utils/shimmer";

interface CartDesktopProps {
  renderProductName: (name: string, size: number) => string;
}

export function CartDesktop({ renderProductName }: CartDesktopProps) {
  const { sortedCart } = useCart();
  const { width } = useWindowDimensions();

  return (
    <ProductTable show={width >= 768}>
      <thead>
        <tr>
          <th aria-label="product image" />
          <th>PRODUTO</th>
          <th className="header_qtd">QTD</th>
          <th className="header_center">SUBTOTAL</th>
          <th aria-label="delete icon" />
        </tr>
      </thead>
      <tbody>
        {sortedCart.map(
          ({
            id,
            name,
            type,
            imageName,
            price,
            priceFormated,
            amount,
            size,
          }) => (
            <tr key={id}>
              <td className="item_image">
                <Image
                  src={`/${type}/${imageName}`}
                  alt={name}
                  width={100}
                  height={100}
                  layout="fixed"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${generateShimmer(
                    100,
                    100,
                  )}`}
                />
              </td>
              <td>
                <strong className="item_name">
                  {renderProductName(name, size)}
                </strong>
                <span className="item_price">{priceFormated}</span>
              </td>
              <td className="td_center">
                <ItemAmount productId={id} amount={amount} />
              </td>
              <td className="td_center">
                <strong className="item_subtotal">
                  {formatPrice(amount * price)}
                </strong>
              </td>
              <td>
                <DeleteButton productId={id} size={22} />
              </td>
            </tr>
          ),
        )}
      </tbody>
    </ProductTable>
  );
}
