import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.25rem;
    font-weight: 800;

    text-align: center;
    margin-bottom: 1rem;
    line-height: 2rem;
  }

  strong {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.25rem 0;
  }

  button {
    background-color: var(--color-primary);
    color: #fff;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 50px;
    font-size: 1.125rem;
    font-weight: 600;

    transition: all 0.3s;

    svg {
      margin-left: 0.8rem;
    }

    &:hover {
      background-color: var(--color-secondary);
    }
  }

  .order_total {
    font-size: 1.3rem;
    font-weight: 700;
  }

  p {
    text-align: center;
    color: var(--color-secondary);
    font-weight: 600;
    padding-top: 1rem;

    a {
      color: var(--color-primary);
      text-decoration: none;
      font-weight: 700;
      margin: 0 0.25rem;

      transition: all 0.3s;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
