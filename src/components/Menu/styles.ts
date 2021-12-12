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
  isActive: boolean;
}

export const MenuItemContainer = styled.div<MenuItemContainerProps>`
  margin: 3rem 1.25rem;
  padding: 2.5rem;
  width: 90%;

  opacity: ${(props) => (props.isActive ? 1 : 0)};
  display: ${(props) => (props.isActive ? "block" : "none")};

  background-color: ${({ isOrange }) =>
    isOrange ? "var(--color-secondary)" : "var(--color-primary)"};
  color: #fff;
  max-width: 1200px;
  border-radius: 20px;

  /* animation: slide-in 0.7s both; */
  animation: opacity 0.6s both;

  @keyframes slide-in {
    0% {
      transform: translateX(1000px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
