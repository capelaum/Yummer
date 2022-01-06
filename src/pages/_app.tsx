import { useCallback, useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";

import { ToastContainer } from "react-toastify";

import { CartProvider } from "contexts/CartContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.min.css";

import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => storePathValues, [router.asPath]);

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;

    // Set the previous path as the value of the current path.
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);

    // Set the current path value by looking at the browser's location object.
    storage.setItem("currentPath", globalThis.location.pathname);
  }

  return (
    <CartProvider>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </CartProvider>
  );
}

export default MyApp;
