import { CartDesktop } from "components/Cart/CartDesktop";
import { CartFooter } from "components/Cart/CartFooter";
import { CartMobile } from "components/Cart/CartMobile";
import { Footer } from "components/Footer";
import { ModalCheckout } from "components/Modal/ModalCheckout";
import { ModalPix } from "components/Modal/ModalPix";
import { images } from "constants/images";
import { useCart } from "contexts/CartContext";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import Modal from "react-modal";
import { showToast } from "utils/toasts";
import {
  CartContainer,
  Checkout,
  Container,
  EmptyCart,
  Header,
} from "./styles";

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
                src={images.yummer_logo}
                alt="Yummer Logo"
                layout="responsive"
                priority
              />
            </a>
          </Link>
        </Header>

        <ModalCheckout
          isOpen={isCheckoutModalOpen}
          onRequestClose={handleCloseCheckoutModal}
          openPixModal={handleOpenPixModal}
          handleSetCustomerName={handleSetCustomerName}
        />

        <ModalPix
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
