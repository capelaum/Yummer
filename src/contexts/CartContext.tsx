import { menu } from "data/menu";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

import { showToastError, showToastInfo } from "utils/toasts";
import { Cart, Product } from "utils/types";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: Product[];
  sortedCart: Product[];
  cartSize: number;
  cartTotal: number;
  renderProductName: (name: string, size: number) => string;
  filterCartByProductType: (cart: Product[]) => Cart;
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: (productId: number, amount: number) => void;
  emptyCart: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(menu);

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

  function renderProductName(name: string, size: number): string {
    return size ? `${name} (${size}g)` : name;
  }

  function filterCartByProductType(cart: Product[]): Cart {
    const cookies = cart.filter((p) => p.type === "cookie");
    const toasts = cart.filter((p) => p.type === "toast");
    const juices = cart.filter((p) => p.type === "juice");

    return { cookies, toasts, juices };
  }

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = cart.map((product) => ({ ...product }));

      const product = updatedCart.find((product) => product.id === productId);

      if (!product) {
        throw Error("Produto não existe!");
      }

      if (product.amount === 0) {
        showToastInfo(
          `${renderProductName(
            product.name,
            product?.size,
          )} adicionado ao carrinho`,
        );
      }

      product.amount += 1;

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
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        sortedCart,
        cartSize,
        cartTotal,
        renderProductName,
        filterCartByProductType,
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
