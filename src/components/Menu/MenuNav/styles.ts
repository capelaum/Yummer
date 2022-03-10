import styled from "styled-components";

export const MenuNavContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 90%;
  max-width: 1200px;

  background-color: var(--color-primary);
  border-radius: 50px;

  button:nth-child(1) {
    border-radius: 50px 0 0 50px;
  }

  button:nth-child(2) {
    border-radius: 0;
  }

  button:nth-child(3) {
    border-radius: 0 50px 50px 0;
  }

  @media (max-width: 768px) {
    background-color: var(--color-primary);
    border-bottom: none;
  }
`;

interface MenuNavButtonProps {
  isActive?: boolean;
}

export const MenuNavButton = styled.button<MenuNavButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 33%;
  border-radius: 50px;

  height: 5rem;
  padding: 0 2.5rem;

  color: var(--color-background);
  background-color: ${({ isActive }) =>
    isActive ? "var(--color-secondary)" : "var(--color-primary)"};

  /* transition: all 0.3s; */

  &:hover {
    color: ${({ isActive }) =>
      isActive ? "var(--color-background)" : "var(--color-secondary)"};
  }

  span {
    padding-left: 0.7rem;

    font-size: 2.25rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    padding: 0;
    height: 3rem;

    .MenuNavButtonIcon {
      display: none;
    }

    span {
      padding-left: 0rem;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 400px) {
    span {
      font-size: 1.2rem;
    }
  }
`;
