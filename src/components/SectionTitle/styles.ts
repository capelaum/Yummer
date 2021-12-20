import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 2.25rem;
    padding-bottom: 2.5rem;
  }

  h2 {
    color: var(--color-secondary);
    text-transform: uppercase;
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
`;
