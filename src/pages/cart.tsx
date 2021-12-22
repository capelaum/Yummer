import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Modal from "react-modal";

import yummer_logo from "@public/Logos/yummer_logo.svg";

import { useCart } from "contexts/CartContext";

import { CartDesktop } from "components/CartDesktop";
import { CartMobile } from "components/CartMobile";
import { CartFooter } from "components/CartFooter";
import { Footer } from "components/Footer";

import { CheckoutModal } from "components/CheckoutModal";
import { PixModal } from "components/PixModal";

import {
  CartContainer,
  CartPageContainer,
  Checkout,
  EmptyCart,
} from "styles/cart";

Modal.setAppElement("#__next");

export default function Cart() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");

  const { cartSize, emptyCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (cartSize <= 0 && !isPixModalOpen) {
      router.push("/");
    }
  }, [cartSize, router, isPixModalOpen]);

  function handleSetCustomerName(customerName: string) {
    setCustomerName(customerName);
  }

  function handleOpenCheckoutModal() {
    setIsCheckoutModalOpen(true);
  }

  function handleCloseCheckoutModal() {
    setIsCheckoutModalOpen(false);
  }

  function handleOpenPixModal() {
    setIsPixModalOpen(true);
  }

  function handleClosePixModal() {
    setIsPixModalOpen(false);
    emptyCart();
  }

  return (
    <>
      <Head>
        <title>Yummer | Checkout</title>
      </Head>
      <CartPageContainer>
        <Link href="/#menu" passHref>
          <a className="yummer_logo" title="Home">
            <Image src={yummer_logo} alt="Yummer Logo" layout="responsive" />
          </a>
        </Link>

        <CheckoutModal
          isOpen={isCheckoutModalOpen}
          onRequestClose={handleCloseCheckoutModal}
          openPixModal={handleOpenPixModal}
          handleSetCustomerName={handleSetCustomerName}
        />

        <PixModal
          isOpen={isPixModalOpen}
          onRequestClose={handleClosePixModal}
          customerName={customerName}
        />

        <Checkout>
          {cartSize <= 0 ? (
            <EmptyCart>
              <h1>🛒 Seu carrinho está vazio..</h1>
            </EmptyCart>
          ) : (
            <CartContainer>
              <CartDesktop />
              <CartMobile />

              <CartFooter onOpenCheckoutModal={handleOpenCheckoutModal} />
            </CartContainer>
          )}
        </Checkout>
      </CartPageContainer>
      <Footer />
    </>
  );
}
