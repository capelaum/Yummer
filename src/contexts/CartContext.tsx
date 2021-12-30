import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

import { renderProductName } from "utils/format";
import { CartItemsAmount, CartProduct, Product } from "utils/types";
import { showToastError, showToastInfo } from "utils/toasts";
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
        const product: Product = getMenuWithPriceFormated().find(
          (p) => p.id === productId,
        );

        const newProduct: CartProduct = {
          ...product,
          amount: 1,
        };

        showToastInfo(
          `${renderProductName(
            product.name,
            product?.size,
          )} adicionado ao carrinho`,
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
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        localStorage.setItem("@Yummer:cart", JSON.stringify(updatedCart));
      } else {
        throw Error("Product not found");
      }
    } catch (error) {
      showToastError(error.message);
    }
  };

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
        throw Error();
      }

      if (productExists) {
        productExists.amount = amount;
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
