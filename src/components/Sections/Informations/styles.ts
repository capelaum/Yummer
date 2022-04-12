import styled from "styled-components";

export const InfoContainer = styled.section`
  background-color: var(--color-primary);

  padding: 2.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  background-image: url("./bg_pattern.svg");
  background-repeat: no-repeat;
  background-size: 2000px;
  background-position: center;

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }
`;

export const Details = styled.details`
  width: 100%;
  max-width: 1200px;

  background-color: #fff;
  color: var(--color-primary);

  padding: 0.25rem 1.25rem;
  margin-bottom: 1.5rem;

  font-size: 1.125rem;
  font-weight: 500;

  border-radius: 20px;

  transition: all 0.3s;

  &[open] {
    summary {
      background-color: #fff;
      svg {
        transform: rotate(90deg);
      }
    }
  }

  p {
    padding: 1rem 1rem 0 1.85rem;
    line-height: 1.625rem;
  }

  ul {
    padding: 1rem 1rem 1rem 3rem;
  }

  li {
    & + li {
      padding-top: 0.5rem;
    }

    font-weight: 600;
  }

  summary {
    cursor: pointer;

    color: var(--color-secondary);

    font-size: 1.5rem;
    font-weight: 600;

    display: flex;
    align-items: center;

    svg {
      height: 35px;
      margin-right: 0.25rem;

      transform: rotate(0deg);
      transition: 0.5s transform ease;
    }
  }
`;
