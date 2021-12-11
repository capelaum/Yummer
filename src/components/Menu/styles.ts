import styled from "styled-components";

export const MenuContainer = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-image: url("./Menu/bg_menu.png");
  background-repeat: repeat;
  background-size: 300px;
`;

interface MenuItemContainerProps {
  isOrange?: boolean;
}

export const MenuItemContainer = styled.div<MenuItemContainerProps>`
  margin: 3rem 1.25rem;
  padding: 2.5rem;
  width: 90%;

  background-color: ${({ isOrange }) =>
    isOrange ? "var(--color-secondary)" : "var(--color-primary)"};
  color: #fff;
  max-width: 1200px;
  border-radius: 20px;
`;
