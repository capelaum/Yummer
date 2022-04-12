import { useCart } from "contexts/CartContext";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Product } from "utils/types";
import { AddCartBtn } from "./styles";

interface AddCartButtonProps {
  product: Product;
  show: boolean;
}

export function AddCartButton({ product, show }: AddCartButtonProps) {
  const { addProduct, cartItemsAmount } = useCart();

  return (
    <AddCartBtn
      show={show}
      onClick={() => addProduct(product.id)}
      title={`Adicionar ${product.name} ao carrinho`}
    >
      <MdOutlineAddShoppingCart
        className="addCartIcon"
        size={24}
        color={"var(--color-primary)"}
      />
      <span>{cartItemsAmount[product.id] || 0}</span>
    </AddCartBtn>
  );
}
