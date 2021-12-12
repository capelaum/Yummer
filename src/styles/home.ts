import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
`;

export const InfoContainer = styled.section`
  background-color: var(--color-primary);

  padding: 2.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  h1 {
    color: #fff;
    font-size: 3rem;
  }

  h2 {
    color: var(--color-secondary);
    text-transform: uppercase;
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
`;
