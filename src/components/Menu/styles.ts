import styled from "styled-components";

export const MenuContainer = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MenuItemsContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
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

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  display: ${({ isActive }) => (isActive ? "block" : "none")};

  background-color: ${({ isOrange }) =>
    isOrange ? "var(--color-secondary)" : "var(--color-primary)"};

  animation: fade-in 0.6s both;

  @keyframes slide-in {
    0% {
      transform: translateX(1000px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes fade-in {
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
