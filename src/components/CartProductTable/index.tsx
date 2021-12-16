import Image from "next/image";

import { MdDelete } from "react-icons/md";

import { ItemAmount } from "components/ItemAmount";

import { useCart } from "contexts/CartContext";

import useWindowDimensions from "hooks/useWindowDimensions";

import { ProductTable } from "./styles";
import { formatPrice } from "utils/format";

interface CartProductTableProps {
  renderProductName: (name: string, size: number) => string;
}

export function CartProductTable({ renderProductName }: CartProductTableProps) {
  const { sortedCart, cartTotal, removeProduct } = useCart();
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
                  src={`${process.env.url_local}/${type}/${imageName}`}
                  alt={name}
                  width={100}
                  height={100}
                  layout="fixed"
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
                <button
                  className="item_delete"
                  type="button"
                  onClick={() => removeProduct(id)}
                >
                  <MdDelete size={20} color={"var(--color-secondary)"} />
                </button>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </ProductTable>
  );
}
