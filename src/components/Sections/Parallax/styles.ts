import styled from "styled-components";

export const Container = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 500px;
  width: 100%;

  background: rgba(0, 0, 0, 0.4);

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

export const ParallaxImage = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url("Parallax/parallax_5.jpg");
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const Text = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: var(--color-background);

  background: transparent;

  text-align: center;

  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

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