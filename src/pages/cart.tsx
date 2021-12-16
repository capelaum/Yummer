import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import yummer_logo from "@public/Logos/yummer_logo.svg";

import { formatPrice } from "utils/format";

import { CartProduct, useCart } from "contexts/CartContext";

import {
  CartPageContainer,
  Checkout,
  CheckoutContainer,
  Total,
} from "styles/cart";
import { CartProductTable } from "components/CartProductTable";

export default function Cart() {
  const { cartTotal, cartSize } = useCart();
  const router = useRouter();

  if (cartSize <= 0) {
    router.push("/");
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
            <CartProductTable renderProductName={renderProductName} />

            <footer>
              <button type="button">FINALIZAR PEDIDO</button>

              <Total>
                <span>TOTAL</span>
                <strong className="checkout_total">
                  {formatPrice(cartTotal)}
                </strong>
              </Total>
            </footer>
          </CheckoutContainer>
        </Checkout>
      </CartPageContainer>
    </>
  );
}
