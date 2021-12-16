import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import yummer_logo from "@public/Logos/yummer_logo.svg";

import { useCart } from "contexts/CartContext";

import { CartDesktop } from "components/CartProductTable";
import { CartMobile } from "components/CartMobile";

import { CartContainer, CartPageContainer, Checkout } from "styles/cart";
import { CartFooter } from "components/CartFooter";
import { useEffect } from "react";

export default function Cart() {
  const { cartSize } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (cartSize <= 0) {
      router.push("/");
    }
  }, []);

  function renderProductName(name: string, size: number): string {
    return size ? `${name} (${size}g)` : name;
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
          <CartContainer>
            <CartDesktop renderProductName={renderProductName} />
            <CartMobile renderProductName={renderProductName} />

            <CartFooter />
          </CartContainer>
        </Checkout>
      </CartPageContainer>
    </>
  );
}
