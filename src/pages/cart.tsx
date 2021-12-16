import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Modal from "react-modal";

import yummer_logo from "@public/Logos/yummer_logo.svg";

import { useCart } from "contexts/CartContext";

import { CartDesktop } from "components/CartProductTable";
import { CartMobile } from "components/CartMobile";

import { CartContainer, CartPageContainer, Checkout } from "styles/cart";
import { CartFooter } from "components/CartFooter";
import { useEffect, useState } from "react";
import { CheckoutModal } from "components/CheckoutModal";

Modal.setAppElement("#__next");

export default function Cart() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
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

  function handleOpenCheckoutModal() {
    setIsCheckoutModalOpen(true);
  }

  function handleCloseCheckoutModal() {
    setIsCheckoutModalOpen(false);
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

        <CheckoutModal
          isOpen={isCheckoutModalOpen}
          onRequestClose={handleCloseCheckoutModal}
        />

        <Checkout>
          <CartContainer>
            <CartDesktop renderProductName={renderProductName} />
            <CartMobile renderProductName={renderProductName} />

            <CartFooter onOpenCheckoutModal={handleOpenCheckoutModal} />
          </CartContainer>
        </Checkout>
      </CartPageContainer>
    </>
  );
}
