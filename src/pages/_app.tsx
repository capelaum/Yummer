import { AppProps } from "next/app";

import { ToastContainer } from "react-toastify";

import { CartProvider } from "contexts/CartContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.min.css";

import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </CartProvider>
  );
}

export default MyApp;
