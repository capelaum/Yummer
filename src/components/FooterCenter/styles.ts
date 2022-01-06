import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    background-color: transparent;
    color: #fff;
    font-weight: 700;
    font-size: 1.25rem;

    transition: all 0.3s;

    &:hover {
      color: var(--color-secondary);
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 1.5rem;
  }
`;
