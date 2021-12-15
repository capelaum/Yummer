import { createContext, ReactNode, useContext, useState } from "react";

import { Product } from "utils/types";

interface CartProviderProps {
  children: ReactNode;
}

interface CartProduct extends Product {
  amount: number;
}

interface CartContextData {
  cart: CartProduct[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProduct[]>(() => {
    const storagedCart = localStorage.getItem("@Yummer:cart");

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

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
        const product: CartProduct = await fetch(
          `${process.env.URL_LOCAL}/api/menu/${productId}`,
        ).then((response) => response.json());

        console.log("🚀 ~ product", product);

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

  const removeProduct = (productId: number) => {
    const newCart = cart.filter((product) => product.id !== productId);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
