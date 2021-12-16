import styled from "styled-components";

export const CartFooterContainer = styled.footer`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  button {
    padding: 1rem 4rem;
    border-radius: 50px;

    text-transform: uppercase;

    font-size: 1.5rem;
    font-weight: 500;

    color: white;
    background-color: var(--color-secondary);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.85);
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;
    flex-direction: column-reverse;

    button {
      padding: 1rem;
      font-size: 1.25rem;

      width: 100%;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: flex-end;

  span {
    font-size: 1rem;
    color: var(--color-secondary);
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  .checkout_total {
    padding-left: 0.4rem;
    font-size: 2rem;
    color: #fff;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    margin: 1.5rem 0;

    .checkout_total {
      padding-left: 0;
      font-size: 2rem;
    }
  }
`;
