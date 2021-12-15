import { AppProps } from "next/app";

import { CartProvider } from "contexts/CartContext";

import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </CartProvider>
  );
}

export default MyApp;
