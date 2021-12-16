import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Modal from "react-modal";

import yummer_logo from "@public/Logos/yummer_logo.svg";

import { useCart } from "contexts/CartContext";

import { CartDesktop } from "components/CartProductTable";
import { CartMobile } from "components/CartMobile";
import { CartFooter } from "components/CartFooter";

import { CheckoutModal } from "components/CheckoutModal";
import { PixModal } from "components/PixModal";

import { CartContainer, CartPageContainer, Checkout } from "styles/cart";

Modal.setAppElement("#__next");

export default function Cart() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");

  const { cartSize } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (cartSize <= 0) {
      router.push("/");
    }
  }, [cartSize]);

  function renderProductName(name: string, size: number): string {
    return size ? `${name} (${size}g)` : name;
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
  }

  function handleSetCustomerName(customerName: string) {
    setCustomerName(customerName);
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
          setCustomerName={handleSetCustomerName}
        />

        <PixModal
          isOpen={isPixModalOpen}
          onRequestClose={handleClosePixModal}
          customerName={customerName}
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
