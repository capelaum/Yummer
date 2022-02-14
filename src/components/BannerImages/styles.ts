import styled from "styled-components";

interface MainImageProps {
  isActive: boolean;
  isMobile?: boolean;
}

export const MainImage = styled.div<MainImageProps>`
  margin: 0 2rem;
  max-width: 1200px;
  width: 90%;
  /* height: 100%; */

  /* display: flex;
  align-items: center;
  justify-content: center; */

  /* border: 1px solid red; */

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  display: ${({ isActive }) => (isActive ? "block" : "none")};

  animation: ${({ isMobile }) =>
    isMobile ? "opacity ease-in-out both 1s" : "slide linear 6s"};

  /* animation: slide linear 6s; */

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes slide {
    0% {
      opacity: 0;
      transform: translate(-2500px);
    }

    20% {
      opacity: 1;
      transform: translate(0);
    }

    80% {
      opacity: 1;
      transform: translate(0);
    }

    100% {
      opacity: 0;
      transform: translate(2000px);
    }
  }

  @keyframes slide-rigth {
    0% {
      transform: translate(1000px, -50%);
    }
    100% {
      transform: translate(0, -50%);
    }
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
    width: auto;
  }
`;
