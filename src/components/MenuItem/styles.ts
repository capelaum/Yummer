import styled from "styled-components";

export const MenuItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  border: 1px solid red;

  .menu_item_image {
    margin-right: 1.25rem;
  }

  header {
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.75rem;

    h2 {
      color: var(--color-secondary);
      font-weight: 800;
      font-size: 2.25rem;
      padding: 0;
    }

    span {
      padding-left: 0.8rem;
      padding-bottom: 0.3rem;
      font-weight: 500;
      font-size: 1.25rem;

      color: var(--color-gray-400);
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
