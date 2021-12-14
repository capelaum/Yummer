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

  h1 {
    color: #fff;
    font-size: 2.25rem;
    padding-bottom: 2.5rem;
  }

  h2 {
    color: var(--color-secondary);
    text-transform: uppercase;
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
`;

export const Details = styled.details`
  width: 100%;
  max-width: 1200px;

  background-color: #fff;
  color: var(--color-primary);

  padding: 0.5rem 1.25rem;
  margin-bottom: 2.5rem;

  border-radius: 5px;
  transition: all 0.3s;

  font-size: 1.25rem;

  &:hover {
    /* filter: brightness(0.9); */
  }

  p {
    padding: 1rem 1.7rem;
    line-height: 1.625rem;
  }

  ul {
    padding-bottom: 1rem;
  }

  li {
    margin-left: 3rem;
    font-weight: 500;
  }

  summary {
    cursor: pointer;

    color: var(--color-secondary);

    font-size: 1.875rem;
    font-weight: 500;
  }
`;
