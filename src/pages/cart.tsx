import Link from "next/link";
import Image from "next/image";

import { MdDelete } from "react-icons/md";

import yummer_logo from "@public/Logos/yummer_logo.svg";

import { formatPrice } from "utils/format";
import { CartProduct, useCart } from "contexts/CartContext";

import {
  CartPageContainer,
  Checkout,
  CheckoutContainer,
  ProductTable,
  Total,
} from "styles/cart";
import { ItemAmount } from "components/ItemAmount";

export default function Cart() {
  const { cart, removeProduct } = useCart();
  console.log("🚀 ~ cart", cart);

  function calculateSubTotal(amount: number, price: number): string {
    return formatPrice(amount * price);
  }

  function calculateCartTotal(cart: CartProduct[]): string {
    return formatPrice(
      cart.reduce((acc, curr) => acc + curr.amount * curr.price, 0),
    );
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <CartPageContainer>
      <Link href="/#menu" passHref>
        <div className="yummer_logo">
          <Image src={yummer_logo} alt="Yummer Logo" layout="responsive" />
        </div>
      </Link>

      <Checkout>
        <CheckoutContainer>
          <ProductTable>
            <thead>
              <th aria-label="product image" />
              <th>PRODUTO</th>
              <th className="header_qtd">QTD</th>
              <th className="header_center">SUBTOTAL</th>
              <th aria-label="delete icon" />
            </thead>
            <tbody>
              {cart.map(
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
                      <strong className="item_name">{name}</strong>
                      <span className="item_price">{priceFormated}</span>
                    </td>
                    <td className="td_center">
                      <ItemAmount amount={amount} />
                    </td>
                    <td className="td_center">
                      <strong className="item_subtotal">
                        {calculateSubTotal(amount, price)}
                      </strong>
                    </td>
                    <td>
                      <button
                        className="item_delete"
                        type="button"
                        onClick={() => handleRemoveProduct(id)}
                      >
                        <MdDelete size={20} color={"var(--color-secondary)"} />
                      </button>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </ProductTable>

          <footer>
            <button type="button">FINALIZAR PEDIDO</button>

            <Total>
              <span>TOTAL</span>
              <strong className="checkout_total">
                {calculateCartTotal(cart)}
              </strong>
            </Total>
          </footer>
        </CheckoutContainer>
      </Checkout>
    </CartPageContainer>
  );
}
