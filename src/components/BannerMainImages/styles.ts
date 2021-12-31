import styled from "styled-components";

interface MainImageProps {
  isActive: boolean;
  isMobile?: boolean;
}

export const MainImage = styled.div<MainImageProps>`
  margin: 0 4rem;

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  display: ${({ isActive }) => (isActive ? "block" : "none")};

  animation: opacity 1s both;

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;
