import styled from "styled-components";

interface ContainerProps {
  isBlue: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;

  h1 {
    color: ${({ isBlue }) => (isBlue ? "var(--color-primary)" : "#fff")};
    text-align: center;
    font-size: 2rem;
    padding-bottom: 2.5rem;
  }

  h2 {
    color: var(--color-secondary);
    text-transform: uppercase;
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
`;
