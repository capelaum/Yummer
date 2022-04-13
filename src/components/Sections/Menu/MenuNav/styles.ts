import styled, { css } from "styled-components";

export const MenuNavContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  max-width: 1200px;
  width: 90%;

  background-color: var(--color-primary);
  border-radius: var(--border-rounded);

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

  height: 4rem;
  padding: 0 2.5rem;

  color: var(--color-background);

  /* transition: all 0.3s; */

  ${({ isActive }) => css`
    background-color: ${isActive
      ? "var(--color-secondary)"
      : "var(--color-primary)"};

    &:hover {
      color: ${isActive ? "var(--color-white)" : "var(--color-secondary)"};

      .MenuNavButtonIcon {
        filter: ${isActive
          ? "var(--color-white)"
          : `invert(43%) sepia(40%) saturate(4271%) hue-rotate(355deg)
          brightness(95%) contrast(94%)`};
      }
    }
  `}

  span {
    padding-left: 0.7rem;

    font-size: 1.5rem;
    font-weight: 500;
  }

  .MenuNavButtonIcon {
    display: flex;
    justify-content: center;
    align-items: center;
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
