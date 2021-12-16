import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

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
  const { sortedCart, cartSize, removeProduct } = useCart();
  const router = useRouter();

  if (cartSize <= 0) {
    router.push("/");
  }

  function calculateSubTotal(amount: number, price: number): string {
    return formatPrice(amount * price);
  }

  function calculateCartTotal(cart: CartProduct[]): string {
    return formatPrice(
      cart.reduce((acc, curr) => acc + curr.amount * curr.price, 0),
    );
  }

  function renderProductName(name: string, size: number): string {
    if (size) {
      return `${name} (${size}g)`;
    }

    return name;
  }

  return (
    <>
      <Head>
        <title>Yummer | Checkout</title>
      </Head>
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
                          {calculateSubTotal(amount, price)}
                        </strong>
                      </td>
                      <td>
                        <button
                          className="item_delete"
                          type="button"
                          onClick={() => removeProduct(id)}
                        >
                          <MdDelete
                            size={20}
                            color={"var(--color-secondary)"}
                          />
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
                  {calculateCartTotal(sortedCart)}
                </strong>
              </Total>
            </footer>
          </CheckoutContainer>
        </Checkout>
      </CartPageContainer>
    </>
  );
}
