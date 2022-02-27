import { formatPrice, renderProductName } from "utils/format";

import { CartAmountButton } from "components/Cart/CartAmountButton";
import { DeleteButton } from "components/Cart/DeleteButton";
import { ProductImage } from "components/ProductImage";

import { useCart } from "contexts/CartContext";

import { ProductTable } from "./styles";

export function CartDesktop() {
  const { sortedCart } = useCart();

  return (
    <ProductTable>
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
            imageSrc,
            price,
            priceFormated,
            amount,
            size,
          }) => (
            <tr key={id}>
              <td className="item_image">
                <ProductImage
                  name={name}
                  type={type}
                  imageSrc={imageSrc}
                  menuType="cart"
                />
              </td>
              <td>
                <strong className="item_name">
                  {renderProductName(name, size)}
                </strong>
                <span className="item_price">{priceFormated}</span>
              </td>
              <td className="td_center">
                <CartAmountButton productId={id} amount={amount} />
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
