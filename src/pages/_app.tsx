import { AppProps } from "next/app";
import { ToastContainer, toast } from "react-toastify";

import { CartProvider } from "contexts/CartContext";

import "react-toastify/dist/ReactToastify.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
