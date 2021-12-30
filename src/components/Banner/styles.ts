import styled from "styled-components";

export const BannerContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  .yummer_logo {
    width: 400px;
  }

  p {
    color: var(--color-primary);
    margin: 2.5rem 0;
    text-align: center;
    font-size: 1.2rem;
    padding: 0 1rem;
    max-width: 600px;
  }

  button {
    margin: 0rem auto 8.75rem;
    padding: 1rem 4.5rem;

    background-color: var(--color-primary);
    color: #fff;

    border-radius: 50px;
    font-weight: 500;
    font-size: 1.1rem;

    transition: all 0.3s;

    &:hover {
      background-color: var(--color-secondary);
    }
  }

  @media (max-width: 768px) {
    margin-top: 2rem;

    .yummer_logo {
      width: 300px;
    }

    p {
      font-size: 1.2rem;
      padding: 0 1rem;
    }

    button {
      font-size: 1.5rem;
      margin-bottom: 4rem;
    }
  }
`;

export const Shape = styled.div`
  width: 100vw;
  height: 300px;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div:nth-child(1),
  div:nth-child(2) {
    position: absolute;

    width: 35vw;

    transform: translateY(-50%);
    /* z-index: -1; */
  }

  .shape_left {
    left: 0;
    top: 40%;
  }

  .shape_right {
    right: 0;
    top: 50%;
  }

  @media (min-width: 1920px) {
    div:nth-child(1) {
      width: 680px;
    }

    div:nth-child(2) {
      width: 730px;
    }
  }
`;

interface MainImageProps {
  isActive: boolean;
  isMobile?: boolean;
}

export const MainImage = styled.div<MainImageProps>`
  margin: ${({ isMobile }) => (isMobile ? "0 2rem" : "0 4rem")};

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  display: ${({ isActive }) => (isActive ? "block" : "none")};

  animation: opacity 0.8s both;

  /* border: 1px solid red; */

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    display: ${({ isMobile, isActive }) =>
      isMobile && isActive ? "block" : "none"};
  }

  @media (min-width: 768px) {
    display: ${({ isMobile, isActive }) =>
      !isMobile && isActive ? "block" : "none"};
  }
`;
