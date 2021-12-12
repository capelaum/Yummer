import styled from "styled-components";

export const MenuContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 20vw;

  @media (max-width: 1080px) {
    margin-top: 10rem;
  }
`;

export const MenuItemsContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-image: url("./Menu/bg_menu.png");
  background-repeat: repeat;
  background-size: 300px;

  @media (max-width: 768px) {
    background-size: 100px;
  }
`;

interface MenuItemContainerProps {
  isOrange?: boolean;
  isActive: boolean;
}

export const MenuItemContainer = styled.div<MenuItemContainerProps>`
  margin: 3rem 0;
  padding: 2.5rem;
  width: 90%;
  max-width: 1200px;
  border-radius: 20px;
  color: #fff;

  opacity: ${(props) => (props.isActive ? 1 : 0)};
  display: ${(props) => (props.isActive ? "block" : "none")};

  background-color: ${({ isOrange }) =>
    isOrange ? "var(--color-secondary)" : "var(--color-primary)"};

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

  @media (max-width: 768px) {
    padding: 2.5rem 1.25rem;

    .menu_item_image {
      margin-right: 0;
    }
  }
`;
