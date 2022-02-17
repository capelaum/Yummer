import styled from "styled-components";

interface MainImageProps {
  isActive: boolean;
  isMobile?: boolean;
}

export const MainImage = styled.div<MainImageProps>`
  margin: 0 2rem;
  max-width: 1200px;
  width: 90%;

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  display: ${({ isActive }) => (isActive ? "block" : "none")};

  animation: ${({ isMobile }) =>
    isMobile ? "opacity ease-in-out both 1s" : "slide linear 4s"};

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
      transform: translate(-100%);
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
      transform: translate(100%);
    }
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
    width: auto;
  }
`;
