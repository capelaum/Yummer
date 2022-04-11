import { Favicon } from "components/Head/Favicon";
import { Seo } from "components/Head/SEO";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br" itemScope itemType="https://schema.org/WebSite">
        <Head>
          <meta charSet="UTF-8" />

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

          <Favicon />

          <Seo
            title="🧡 Yummer - Cookies, Rabanadas, Chás & Sucos"
            description="Somos a Yummer! Cookies, Rabanadas, Chás & Sucos. Viemos fazer com que você NÃO consiga mais viver sem as nossas DELÍCIAS!! Está preparado para compartilhar aquele momento YUMMER junto conosco?!?"
            url="https://yummer.vercel.app"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      initialProps.styles = (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      );

      return {
        ...initialProps,
      };
    } finally {
      sheet.seal();
    }
  }
}
