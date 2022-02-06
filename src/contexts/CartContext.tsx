import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";

import { renderProductName } from "utils/format";
import { CartItemsAmount, CartProduct, Product } from "utils/types";
import { showToastError, showToast } from "utils/toasts";

import { getMenuWithPriceFormated } from "pages/api/menu";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: CartProduct[];
  sortedCart: CartProduct[];
  cartSize: number;
  cartTotal: number;
  cartItemsAmount: { [key: number]: number };
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: (productId: number, amount: number) => void;
  emptyCart: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [menu, setMenu] = useState<Product[]>(getMenuWithPriceFormated());
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    const storagedCart = localStorage.getItem("@Yummer:cart");

    if (storagedCart) {
      setCart(JSON.parse(storagedCart));
    }
  }, []);

  const cartSize = cart.reduce((sum, product) => sum + product.amount, 0);

  const cartTotal = cart.reduce(
    (sum, product) => sum + product.amount * product.price,
    0,
  );

  const sortedCart = cart.sort((a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;

    return 0;
  });

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;

    return sumAmount;
  }, {} as CartItemsAmount);

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = cart.map((product) => ({ ...product }));

      const productExists = updatedCart.find(
        (product) => product.id === productId,
      );

      if (productExists) {
        productExists.amount += 1;
      }

      if (!productExists) {
        const product: Product = menu.find((p) => p.id === productId);

        if (!product) {
          throw Error("Produto não encontrado");
        }

        const newProduct: CartProduct = {
          ...product,
          amount: 1,
        };

        if (product.size === 45) {
          newProduct.amount = 2;
        }

        showToast(
          `${renderProductName(
            product.name,
            product?.size,
          )} adicionado ao carrinho`,
          <MdAddShoppingCart size={30} color="var(--color-secondary)" />,
        );

        updatedCart.push(newProduct);
      }

      setCart(updatedCart);
      localStorage.setItem("@Yummer:cart", JSON.stringify(updatedCart));
    } catch (error) {
      showToastError(error.message);
    }
  };

  const removeProduct = async (productId: number) => {
    try {
      const updatedCart = cart.map((product) => ({ ...product }));
      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId,
      );

      if (productIndex >= 0) {
        showRemoveToast(productId);

        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        localStorage.setItem("@Yummer:cart", JSON.stringify(updatedCart));
      } else {
        throw Error("Produto não encontrado");
      }
    } catch (error) {
      showToastError(error.message);
    }
  };

  function showRemoveToast(productId: number) {
    const product = cart.find((product) => product.id === productId);
    const removedProductName = renderProductName(product.name, product?.size);

    const removeProductMessage =
      cart.length === 1
        ? "Seu carrinho está vazio..."
        : `${removedProductName} removido do carrinho`;

    showToast(
      `${removeProductMessage}`,
      <MdOutlineRemoveShoppingCart size={28} color="var(--color-secondary)" />,
    );
  }

  const updateProductAmount = (productId: number, amount: number) => {
    try {
      if (amount <= 0) {
        removeProduct(productId);
        return;
      }

      const updatedCart = cart.map((product) => ({ ...product }));
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      );

      if (!productExists) {
        throw Error("Produto não encontrado");
      }

      if (productExists) {
        productExists.amount = amount;

        if (productExists.size === 45 && productExists.amount < 2) {
          removeProduct(productId);
          return;
        }

        setCart(updatedCart);
        localStorage.setItem("@Yummer:cart", JSON.stringify(updatedCart));
      }
    } catch (error) {
      showToastError(error.message);
    }
  };

  function emptyCart() {
    setCart([]);
    localStorage.setItem("@Yummer:cart", JSON.stringify([]));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        sortedCart,
        cartSize,
        cartTotal,
        cartItemsAmount,
        addProduct,
        removeProduct,
        updateProductAmount,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
