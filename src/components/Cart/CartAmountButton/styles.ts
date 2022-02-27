import styled from "styled-components";

export const CartAmountButtonContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-primary);

  border-radius: 50px;

  width: 80px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    font-size: 1.125rem;
    font-weight: 600;
  }

  .minus_btn,
  .plus_btn {
    background-color: var(--color-background);
    color: var(--color-primary);

    display: flex;
    align-items: center;
    justify-content: center;

    width: 22px;
    height: 22px;

    border-radius: 50px;

    transition: all 0.2s;

    &:hover {
      background-color: var(--color-gray-200);
    }
  }

  @media (max-width: 480px) {
    margin-right: 1rem;
  }
`;
