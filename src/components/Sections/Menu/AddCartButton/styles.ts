import styled from "styled-components";

interface AddCartBtnProps {
  show?: boolean;
}

export const AddCartBtn = styled.button<AddCartBtnProps>`
  display: flex;
  align-items: center;

  background-color: #fff;
  border-radius: 10px;

  margin: 0 1rem 0 4rem;
  padding: 0.75rem 1rem;

  display: ${({ show }) => (show ? "none" : "flex")};

  transition: all 0.3s;

  .addCartIcon {
    margin-right: 0.5rem;
  }

  span {
    color: var(--color-primary) !important;
    font-size: 1.2rem;
    font-weight: 600;
    width: 1.5rem;
  }

  &:focus {
    span {
      animation: button_focus 3s;
    }
  }

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 1080px) {
    margin: 0 1.3rem 0 4rem;
  }

  @keyframes button_focus {
    0% {
      color: var(--color-secondary);
    }

    100% {
      color: var(--color-primary);
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0.75rem 1rem;
    border-radius: 0 5px 5px 0;
  }
`;
