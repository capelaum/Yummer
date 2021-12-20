import { Container } from "./styles";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <Container>
      <h2>{subtitle}</h2>
      <h1>{title}</h1>
    </Container>
  );
}
