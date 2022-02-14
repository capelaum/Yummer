import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Modal from "react-modal";

import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";

import yummer_logo from "@public/Logos/yummer_logo.svg";

import { showToast } from "utils/toasts";

import { useCart } from "contexts/CartContext";

import { CartDesktop } from "components/CartDesktop";
import { CartMobile } from "components/CartMobile";
import { CartFooter } from "components/CartFooter";
import { Footer } from "components/Footer";
import { CheckoutModal } from "components/CheckoutModal";
import { PixModal } from "components/PixModal";

import {
  CartContainer,
  Container,
  Checkout,
  EmptyCart,
  Header,
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
    showToast(
      "A Yummer agradece a preferência!",
      "top-right",
      <IoMdHeart size={28} color="var(--color-secondary)" />,
    );
    emptyCart();
  }

  return (
    <>
      <Head>
        <title>Yummer | Carrinho</title>
      </Head>
      <Container>
        <Header>
          <Link href="/" passHref>
            <a className="yummer_logo" title="Home">
              <Image
                src={yummer_logo}
                alt="Yummer Logo"
                layout="responsive"
                priority
              />
            </a>
          </Link>
        </Header>

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
              <div className="text">
                <MdOutlineRemoveShoppingCart size={24} />
                <span>Seu carrinho está vazio...</span>
              </div>
              <Link href="/#menu" scroll={false} passHref>
                <button title="Voltar para Home">Voltar</button>
              </Link>
            </EmptyCart>
          ) : (
            <CartContainer>
              <CartDesktop />
              <CartMobile />

              <CartFooter onOpenCheckoutModal={handleOpenCheckoutModal} />
            </CartContainer>
          )}
        </Checkout>
      </Container>
      <Footer />
    </>
  );
}
