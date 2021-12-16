import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

import { Product } from "utils/types";

interface CartItemsAmount {
  [key: number]: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export interface CartProduct extends Product {
  amount: number;
}

interface CartContextData {
  cart: CartProduct[];
  cartSize: number;
  cartItemsAmount: { [key: number]: number };
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: (productId: number, amount: number) => void;
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
        const product: CartProduct = await fetch(`api/menu/${productId}`).then(
          (response) => response.json(),
        );

        const newProduct: CartProduct = {
          ...product,
          amount: 1,
        };

        updatedCart.push(newProduct);
      }

      setCart(updatedCart);
      localStorage.setItem("@Yummer:cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("🚀 ~ error", error.message);
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
        throw Error();
      }
    } catch (error) {
      console.error("🚀 ~ error", error.message);
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
      console.error("🚀 ~ error", error.message);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItemsAmount,
        cartSize,
        addProduct,
        removeProduct,
        updateProductAmount,
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
