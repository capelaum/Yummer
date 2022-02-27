import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { MdClose } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import { CartProduct } from "utils/types";
import { showToast } from "utils/toasts";
import { formatPrice, getCartFormated, renderProductName } from "utils/format";

import { useCart } from "contexts/CartContext";

import { Container } from "./styles";

interface ModalCheckoutProps {
  isOpen: boolean;
  onRequestClose: () => void;
  openPixModal: () => void;
  handleSetCustomerName: (customerName: string) => void;
}

export function ModalCheckout({
  isOpen,
  onRequestClose,
  openPixModal,
  handleSetCustomerName,
}: ModalCheckoutProps) {
  const [name, setName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const { sortedCart, cartTotal } = useCart();

  function sendWppOrder() {
    const message = createtMsgOrder();

    const phoneNumber = "994024994";
    const whatsappLink = `https://api.whatsapp.com/send?phone=+5561${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappLink, "_blank");
  }

  function createtMsgOrder(): string {
    let message = `*Nome* \n${name}\n\n`;
    message += `*Endereço de entrega* \n${deliveryAddress}\n\n➡️ *PEDIDO*\n\n`;

    const { cookies, toasts, juices } = getCartFormated(sortedCart);

    if (cookies.length > 0) {
      message += "----------------------------------------------\n";
      message += "🍪 *Cookies*\n\n";
      message += formatProductsOrder(cookies);
    }

    if (toasts.length > 0) {
      message += "----------------------------------------------\n";
      message += "🍞 *Rabanadas*\n\n";
      message += formatProductsOrder(toasts);
    }

    if (juices.length > 0) {
      message += "----------------------------------------------\n";
      message += "🍹 *Sucos*\n\n";
      message += formatProductsOrder(juices);
    }

    message += "----------------------------------------------\n";
    message += `✅ *Total*: ${formatPrice(cartTotal)}\n\n`;
    message += "🔑 *CHAVE PIX CNPJ*: 45.069.279/0001-06";

    return message;
  }

  function formatProductsOrder(cartProducts: CartProduct[]): string {
    const message = cartProducts.reduce(
      (acc, { name, size, amount, price }) => {
        acc += `*${renderProductName(name, size)}*\n`;
        acc += `*Qtd*: ${amount}\n`;
        acc += `*Subtotal*: ${formatPrice(amount * price)}`;
        acc += "\n\n";

        return acc;
      },
      "",
    );

    return message;
  }

  function handleCheckout(e: FormEvent) {
    e.preventDefault();

    handleSetCustomerName(name);

    sendWppOrder();

    setName("");
    setDeliveryAddress("");

    showToast("Pedido enviado com sucesso!");

    onRequestClose();
    openPixModal();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content react-modal-checkout"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <MdClose size={24} className="react-modal-close-checkout" />
      </button>
      <Container onSubmit={handleCheckout}>
        <h2>Informe seu nome e o local de entrega</h2>

        <input
          type="text"
          placeholder="Nome"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Local de entrega"
          required
          value={deliveryAddress}
          onChange={(event) => setDeliveryAddress(event.target.value)}
        />

        <button type="submit">
          <FaWhatsapp size={28} />
          <span>Fazer pedido</span>
        </button>
      </Container>
    </Modal>
  );
}
