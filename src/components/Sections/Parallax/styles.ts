import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 500px;
  width: 100%;

  background: rgba(0, 0, 0, 0.2);

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    background-attachment: fixed;
    background-image: url("Sections/Parallax/parallax_5.jpg");
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 576px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

export const Text = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: var(--color-primary);

  background: transparent;

  text-align: center;

  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  text-shadow: 2px 0 0 var(--color-white), -2px 0 0 var(--color-white),
    0 2px 0 var(--color-white), 0 -2px 0 var(--color-white),
    1px 1px var(--color-white), -1px -1px 0 var(--color-white),
    1px -1px 0 var(--color-white), -1px 1px 0 var(--color-white);

  border-radius: 20px;

  z-index: 3;

  span {
    color: var(--color-secondary);
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 576px) {
    font-size: 2.5rem;
  }

  @media (max-width: 360px) {
    font-size: 2rem;
  }
`;
