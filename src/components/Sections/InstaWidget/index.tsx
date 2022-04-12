import Script from "next/script";

import { showToastError } from "utils/toasts";

import { Container } from "./styles";

export interface InstaWidgetProps {
  observe?: (element: HTMLElement) => void;
}

export function InstaWidget({ observe }: InstaWidgetProps) {
  return (
    <Container>
      <div data-mc-src="42246d07-52fb-4a24-98be-715f30b08031#instagram"></div>

      <Script
        src="https://cdn2.woxo.tech/a.js#613117f8ed78380016017a38"
        data-usrc
        async
        strategy="afterInteractive"
        data-mc-src="9a23f1b1-b499-4fab-9a26-ed97a16ba45a#instagram"
        onError={(e) => {
          console.error(e);
          showToastError("Instagram Widget falhou ao carregar 😕");
        }}
      ></Script>
    </Container>
  );
}
