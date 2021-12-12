import styled from "styled-components";

export const MenuNavContainer = styled.nav`
  margin: 20vw 1.25rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;

  max-width: 1200px;
  border-bottom: 1px solid var(--color-gray-200);

  @media (min-width: 1920px) {
    margin: 25rem 1.25rem 0;
  }

  @media (max-width: 768px) {
    background-color: var(--color-primary);
    justify-content: space-around;

    padding: 0;

    border-bottom: none;
    border-radius: 50px;
  }
`;

interface MenuNavButtonProps {
  isActive?: boolean;
}

const colors = {
  primary: "var(--color-primary)",
  primaryTransparent: "rgba(38, 49, 67, 0.7)",
};

export const MenuNavButton = styled.button<MenuNavButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  color: var(--color-primary);

  background: none;

  padding: 0 2.5rem;

  span {
    padding-left: 0.7rem;

    font-size: 2.25rem;
    font-weight: 500;
  }

  transition: all 0.5s;

  .MenuNavButtonIcon {
    transition: all 0.5s;
    filter: ${({ isActive }) => (isActive ? "none" : "brightness(2)")};
  }

  box-shadow: ${({ isActive }) =>
    isActive ? "0 -3px var(--color-primary) inset" : "none"};

  background: ${({ isActive }) =>
    isActive
      ? "none"
      : "linear-gradient(var(--color-primary) 0 0px) bottom / var(--d, 0) 3px no-repeat"};

  &:hover {
    --d: 100%;

    .MenuNavButtonIcon {
      filter: none;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    height: 50px;

    box-shadow: none;
    background: none;

    .MenuNavButtonIcon {
      display: none;
    }

    span {
      padding-left: 0rem;

      color: ${({ isActive }) =>
        isActive ? "var(--color-secondary) !important" : "#fff"};

      font-size: 1.5rem;
      color: #fff;

      transition: all 0.3s;

      &:hover {
        color: var(--color-secondary);
      }
    }
  }

  @media (max-width: 400px) {
    span {
      font-size: 1.2rem;
    }
  }
`;
