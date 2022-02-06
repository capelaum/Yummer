import styled from "styled-components";

export const ImageContainer = styled.div`
  transition: all 0.3s;

  cursor: pointer;

  /* border: 1px solid red; */

  &:hover {
    transform: scale(1.1);
  }

  .image-overlay {
  }
`;

interface ImageOverlayProps {
  isOpen: boolean;
}

export const ImageOverlay = styled.div<ImageOverlayProps>`
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

  animation: fade-in 0.6s both;

  background: rgba(0, 0, 0, 0.8);

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  align-items: center;
  justify-content: center;

  z-index: 100;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
