import styled from "styled-components";

export const CartButtonContainer = styled.button`
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;

  background: var(--color-primary);
  color: #fff;
  width: 64px;
  height: 64px;

  border-radius: 50%;
  border: 2px solid #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.2rem;

  position: fixed;
  z-index: 10;

  transition: all 0.3s;

  &:hover {
    border: 2px solid var(--color-secondary);
  }

  span {
    position: absolute;

    color: #fff;
    background-color: var(--color-secondary);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    border-radius: 50%;
    width: 24px;
    height: 24px;

    right: -0.5rem;
    top: -0.5rem;

    font-size: 0.9rem;
    font-weight: 500;

    z-index: 2;
  }
`;
