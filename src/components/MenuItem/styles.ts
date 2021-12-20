import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .menu_item_image {
    margin-right: 1.25rem;
  }

  & + & {
    padding-top: 2.5rem;
  }

  p {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    width: 100%;

    .menu_item_image {
      margin-right: 0;
      padding-bottom: 1rem;
    }

    & + & {
      padding-top: 3rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface TextContentProps {
  isOrange?: boolean;
}

export const TextContent = styled.div<TextContentProps>`
  header {
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.75rem;

    .item_title {
      h2 {
        color: ${({ isOrange }) =>
          isOrange ? "var(--color-primary)" : "var(--color-secondary)"};
        font-weight: 800;
        font-size: 2rem;
        padding: 0;
      }
    }

    span {
      padding-left: 0.8rem;
      padding-bottom: 0.3rem;
      font-weight: 500;
      font-size: 1.25rem;

      color: ${({ isOrange }) => (isOrange ? "#fff" : "var(--color-gray-400)")};
    }
  }

  @media (max-width: 768px) {
    header {
      flex-direction: column-reverse;
      align-items: flex-start;
      width: 100%;

      .item_title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        padding: 0rem 0 0 0.625rem;
        border-radius: 5px;
        background-color: ${({ isOrange }) =>
          isOrange ? "var(--color-primary)" : "var(--color-secondary)"};

        h2 {
          color: #fff;
        }
      }

      span {
        padding-left: 0.25rem;
      }
    }
  }

  @media (max-width: 480px) {
    header {
      .item_title {
        h2 {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 400px) {
    header {
      .item_title {
        h2 {
          font-size: 1.1rem;
        }
      }
    }
  }
`;
