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
  CheckoutEnd,
  CheckoutItem,
} from "styles/cart";
import { ItemAmount } from "components/ItemAmount";

export default function Cart() {
  const { cart } = useCart();
  console.log("🚀 ~ cart", cart);

  function calculateSubTotal(amount: number, price: number): string {
    return formatPrice(amount * price);
  }

  function calculateCartTotal(cart: CartProduct[]): string {
    return formatPrice(
      cart.reduce((acc, curr) => acc + curr.amount * curr.price, 0),
    );
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
          <header>
            <span>ITEM</span>
            <div className="header_qtd_subtotal">
              <span>QTD</span>
              <span>SUBTOTAL</span>
            </div>
          </header>
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
              <CheckoutItem key={id}>
                <div className="item_description">
                  <div className="item_image">
                    <Image
                      src={`${process.env.url_local}/${type}/${imageName}`}
                      alt={name}
                      width={100}
                      height={100}
                      layout="fixed"
                    />
                  </div>
                  <div className="item_header">
                    <h1>{`${name} ${size ? `(${size}g)` : ""}`}</h1>
                    <span>{priceFormated}</span>
                  </div>
                </div>

                <div className="item_amount">
                  <ItemAmount amount={amount} />
                  <span className="item_subtotal">
                    {calculateSubTotal(amount, price)}
                  </span>
                  <MdDelete size={20} color={"var(--color-secondary)"} />
                </div>
              </CheckoutItem>
            ),
          )}

          <CheckoutEnd>
            <button>FINALIZAR PEDIDO</button>
            <div>
              <span>TOTAL</span>
              <span className="checkout_total">{calculateCartTotal(cart)}</span>
            </div>
          </CheckoutEnd>
        </CheckoutContainer>
      </Checkout>
    </CartPageContainer>
  );
}
