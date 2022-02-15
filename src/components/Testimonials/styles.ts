import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: var(--color-primary);

  padding: 2.5rem 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-image: url("./bg_pattern.svg");
  background-repeat: no-repeat;
  background-size: 2000px;
  background-position: center;

  .next-arrow,
  .prev-arrow {
    color: var(--color-background);

    transition: color 0.3s;

    &:hover {
      cursor: pointer;
      color: var(--color-secondary);
    }
  }

  .slick-slider {
    width: 100%;
    max-width: 1200px;

    display: flex;
    align-items: center;

    margin-bottom: 1rem;

    .slick-slide {
      & > div {
        border-radius: 20px;
        margin: 0 0.5rem;
      }
    }
  }

  .slick-dots {
    li {
      button {
        color: #fff;
      }
    }
  }
`;

interface ItemProps {
  isOrange?: boolean;
}

export const Item = styled.div<ItemProps>`
  background: ${({ isOrange }) =>
    isOrange ? "var(--color-secondary)" : "var(--color-background)"};

  color: ${({ isOrange }) =>
    isOrange ? "var(--color-background)" : "var(--color-primary)"};

  padding: 1.5rem;

  min-height: 250px;

  display: flex !important;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;

  position: relative;

  p {
    font-size: 1rem;
    font-weight: 400;

    text-align: center;
  }

  .quote_icon {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .author {
    display: flex;
    align-items: center;

    flex-direction: column;
    padding-bottom: 1.5rem;

    &_image {
      width: 50px;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: center;

      object-fit: cover;

      border: ${({ isOrange }) =>
        isOrange
          ? "2px solid var(--color-primary)"
          : "2px solid var(--color-secondary)"};

      border-radius: 50px;

      overflow: hidden;
      margin-bottom: 1rem;
    }

    strong {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;
