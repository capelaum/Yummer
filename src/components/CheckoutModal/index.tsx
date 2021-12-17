import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { MdClose } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import { formatPrice } from "utils/format";

import { CartProduct, useCart } from "contexts/CartContext";

import { Container } from "./styles";

interface CheckoutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  openPixModal: () => void;
  setCustomerName: (customerName: string) => void;
  renderProductName: (name: string, size: number) => string;
}

export function CheckoutModal({
  isOpen,
  onRequestClose,
  openPixModal,
  setCustomerName,
  renderProductName,
}: CheckoutModalProps) {
  const [name, setName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const { sortedCart, cartTotal } = useCart();

  function setProductsOrder(products: CartProduct[], type: string): string {
    if (products.length > 0) {
      let message = "----------------------------------------------\n";

      switch (type) {
        case "cookie":
          message += "*Cookies*";
          break;
        case "toast":
          message += "*Rabanadas*";
          break;
        case "juice":
          message += "*Sucos*";
          break;
      }

      message += "\n\n";

      products.forEach(({ name, type, amount, price, size }) => {
        message += `*${renderProductName(name, size)}*: ${amount}`;
        message += "\n";
      });

      return message;
    }

    return "";
  }

  function sendWppOrder() {
    let message = `*******************************************************
*Nome*: ${name}
*Endereço de entrega*: ${deliveryAddress}
*******************************************************
*Pedido:*
`;

    const cookies = sortedCart.filter((p) => p.type === "cookie");
    const toasts = sortedCart.filter((p) => p.type === "toast");
    const juices = sortedCart.filter((p) => p.type === "juice");

    message += setProductsOrder(cookies, "cookie");
    message += setProductsOrder(toasts, "toast");
    message += setProductsOrder(juices, "juice");

    message += "----------------------------------------------\n";
    message += "*Total*: " + formatPrice(cartTotal);

    const phoneNumber = "994024994";
    const whatsappLink = `https://api.whatsapp.com/send?phone=+5561${phoneNumber}&text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappLink, "_blank").focus();
  }

  function handleCheckout(e: FormEvent) {
    e.preventDefault();

    setCustomerName(name);

    sendWppOrder();

    setName("");
    setDeliveryAddress("");

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
