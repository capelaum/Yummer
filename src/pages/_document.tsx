import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-br" itemScope itemType="https://schema.org/WebSite">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            cross-origin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,800&display=swap"
            rel="stylesheet"
          />

          <meta
            name="description"
            content="Somos a YUMMER! Cookies, Rabanadas chá & sucos Pedidos de Seg a Quin | Entregas Sex e Sab "
          />

          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="favicon/safari-pinned-tab.svg"
            color="#ea5b13"
          />
          <meta name="msapplication-TileColor" content="#263143" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="shortcut icon"
            href="favicon/favicon.ico"
            type="image/x-icon"
          />

          <meta
            name="description"
            content="Somos a Yummer! Cookies, Rabanadas Chás & Sucos. - Brasília, DF."
          />
          <meta
            property="og:title"
            content="🧡 Yummer - Cookies, Rabanadas Chás & Sucos"
          />
          <meta property="og:site_name" content="Yummer"></meta>
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Somos a Yummer! Cookies, Rabanadas Chás & Sucos. - Brasília, DF."
          />
          <meta property="og:url" content="https://yummer.vercel.app" />
          <meta property="og:locale" content="pt_BR"></meta>

          <meta
            property="og:image"
            itemProp="image"
            content="https://yummer.vercel.app/Logos/yummer_logo.png"
          />
          <meta property="og:image:type" content="image/png"></meta>

          <meta name="twitter:url" content="https://yummer.vercel.app" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@capellett" />
          <meta name="twitter:title" content="Yummer" />
          <meta
            name="twitter:description"
            content="Somos a YUMMER! Cookies, Rabanadas Chás & Sucos. - Brasília, DF."
          />
          <meta
            name="twitter:image"
            content="https://yummer.vercel.app/Logos/yummer_logo.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
