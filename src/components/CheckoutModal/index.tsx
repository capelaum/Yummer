import { FormEvent, useState } from "react";
import Modal from "react-modal";

import { MdClose } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import { Container } from "./styles";

interface CheckoutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  openPixModal: () => void;
  setCustomerName: (customerName: string) => void;
}

export function CheckoutModal({
  isOpen,
  onRequestClose,
  openPixModal,
  setCustomerName,
}: CheckoutModalProps) {
  const [name, setName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  function handleCheckout(e: FormEvent) {
    e.preventDefault();

    setCustomerName(name);

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
