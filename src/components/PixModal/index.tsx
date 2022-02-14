import Image from "next/image";
import Modal from "react-modal";

import { MdClose, MdOutlineContentCopy } from "react-icons/md";

import { formatPrice } from "utils/format";
import { showToast } from "utils/toasts";

import { useCart } from "contexts/CartContext";
import useCopyToClipboard from "hooks/useCopyToClipboard";

import { Container } from "./styles";

interface PixModalProps {
  isOpen: boolean;
  customerName: string;
  onRequestClose: () => void;
}

export function PixModal({
  isOpen,
  customerName,
  onRequestClose,
}: PixModalProps) {
  const [copiedText, copy] = useCopyToClipboard();
  const { cartTotal } = useCart();
  const pixKey = "45.069.279/0001-06";

  const phoneNumber = "994024994";

  function handleCopyPixKey(key: string) {
    copy(key.replace(/\W/g, ""));

    showToast(
      `Chave PIX ${key} copiada!`,
      "bottom-right",
      <MdOutlineContentCopy size={28} color="var(--color-secondary)" />,
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content react-modal-pix"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <MdClose size={24} className="react-modal-close-pix" />
      </button>
      <Container>
        <h1>
          Confirme seu pedido <br />
          {customerName}
        </h1>
        <strong>Faça um PIX para</strong>
        <strong>Ana Clara Nunes Zayat</strong>

        <Image
          src="/PIX_QR_CODE_YUMMER.svg"
          alt="PIX - QR Code"
          width={200}
          height={200}
          layout="fixed"
        />
        <strong className="order_total">Total: {formatPrice(cartTotal)}</strong>

        <h2>Chave CNPJ</h2>
        <button
          onClick={() => handleCopyPixKey(pixKey)}
          title="Copiar Chave PIX"
        >
          {pixKey}
          <MdOutlineContentCopy size={16} />
        </button>

        <p>
          Por favor, envie o comprovante ao nosso
          <a
            href={`https://api.whatsapp.com/send?phone=+5561${phoneNumber}`}
            target="_blank"
            rel="noreferrer"
            title="Yummer Whatsapp"
          >
            WhatsApp
          </a>
          para confirmar o seu pedido!
        </p>
      </Container>
    </Modal>
  );
}
