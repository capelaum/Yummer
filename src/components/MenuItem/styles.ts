import styled from "styled-components";

interface MenuItemContentProps {
  isOrange?: boolean;
}

export const MenuItemContent = styled.div<MenuItemContentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  .menu_item_image {
    margin-right: 1.25rem;
  }

  header {
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.75rem;

    h2 {
      color: ${({ isOrange }) =>
        isOrange ? "var(--color-primary)" : "var(--color-secondary)"};
      font-weight: 800;
      font-size: 2rem;
      padding: 0;
    }

    span {
      padding-left: 0.8rem;
      padding-bottom: 0.3rem;
      font-weight: 500;
      font-size: 1.25rem;

      color: ${({ isOrange }) => (isOrange ? "#fff" : "var(--color-gray-400)")};
    }
  }

  padding-bottom: 2.5rem;

  p {
    font-size: 1.25rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;
