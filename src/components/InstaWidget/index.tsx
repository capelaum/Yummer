import { Container } from "./styles";

interface InstaWidgetProps {
  observe?: (element: HTMLElement) => void;
}

export function InstaWidget({ observe }: InstaWidgetProps) {
  return (
    <Container>
      <div data-mc-src="adc5162c-45c3-4966-862d-82a0f014ee08#instagram"></div>

      <script
        src="https://cdn2.woxo.tech/a.js#613117f8ed78380016017a38"
        async
        data-usrc
      ></script>
    </Container>
  );
}
