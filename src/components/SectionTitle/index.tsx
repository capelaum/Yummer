import { Container } from "./styles";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  isBlue?: boolean;
}

export function SectionTitle({ title, subtitle, isBlue }: SectionTitleProps) {
  return (
    <Container isBlue={isBlue}>
      <h2>{subtitle}</h2>
      <h1>{title}</h1>
    </Container>
  );
}
