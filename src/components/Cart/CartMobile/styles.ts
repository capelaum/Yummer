import styled from "styled-components";

export const CartMobileContainer = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Product = styled.div`
  width: 100%;

  padding: 1rem 0;

  display: flex;
  flex-direction: column;

  border-bottom: 1px dotted var(--color-gray-200);
`;

export const ProductHeader = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
`;

export const ProductTitle = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 0.75rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  span {
    padding-top: 0.5rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.25rem;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 1.5rem;
`;

export const ProductSubtotal = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    text-transform: uppercase;
    color: var(--color-secondary);
    font-size: 1.5rem;
  }

  span {
    padding-top: 0.1rem;
    font-size: 1.25rem;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    strong {
      font-size: 1.25rem;
    }

    span {
      font-size: 1rem;
    }
  }
`;
