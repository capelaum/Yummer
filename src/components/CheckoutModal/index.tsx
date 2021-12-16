import { useState } from "react";
import Modal from "react-modal";

import { MdClose } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

import { Container } from "./styles";

interface CheckoutModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CheckoutModal({ isOpen, onRequestClose }: CheckoutModalProps) {
  const [name, setName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <MdClose size={24} color={"#fff"} />
      </button>
      <Container>
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
