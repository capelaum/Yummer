import Image from "next/image";
import Modal from "react-modal";

import { MdClose, MdOutlineContentCopy } from "react-icons/md";

import { formatPrice } from "utils/format";
import { showToastSuccess } from "utils/toasts";

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
  const [value, copy] = useCopyToClipboard();
  const { cartTotal } = useCart();

  const phoneNumber = "994024994";

  function handleCopyPixKey(key: string) {
    copy(key);

    showToastSuccess(
      `Chave PIX ${key} copiada!`,
      <MdOutlineContentCopy size={28} />,
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
        <strong>Pague com PIX</strong>
        <strong>Nome: Ana Clara Zayat</strong>
        <button
          onClick={() => handleCopyPixKey("xxxxxxxxxxxxxx")}
          title="Copiar Chave PIX"
        >
          Chave PIX: xxxxxxxxxxxxxx
          <MdOutlineContentCopy size={16} />
        </button>

        <Image
          src="/PIX_QR_CODE.svg"
          alt="PIX - QR Code"
          width={200}
          height={200}
          layout="fixed"
        />

        <strong className="order_total">Total: {formatPrice(cartTotal)}</strong>

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
