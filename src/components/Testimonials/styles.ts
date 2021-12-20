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

  .slick-slider {
    width: 100%;
    max-width: 1200px;
  }

  .slick-slide > div {
    margin: 0 1rem;
  }

  .slick-dots {
    li {
      button {
        color: #fff;
      }
    }
  }
`;

export const Item = styled.div`
  background: #fff;
  color: var(--color-primary);

  padding: 1.25rem;

  /* min-height: 200px; */

  display: flex !important;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 20px;

  p {
    font-size: 1rem;
    font-weight: 400;
  }

  .author {
    display: flex;
    align-items: center;
    padding-top: 1rem;
  }

  .author_image {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right: 1rem;

    overflow: hidden;
  }

  .author_info {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 0.9rem;
      font-weight: 700;
    }

    a {
      display: block;
      color: var(--color-secondary);
      padding-top: 0.25rem;

      font-size: 0.75rem;
      font-weight: 700;

      transition: all 0.3s;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
