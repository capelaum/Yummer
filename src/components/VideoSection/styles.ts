import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoContent = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  justify-content: center;
  position: relative;

  .shapeLeft {
    position: absolute;

    left: -140px;
    bottom: -20%;
  }

  .shapeRight {
    position: absolute;

    right: -200px;
    top: -120px;
  }

  iframe {
    width: 1120px;
    height: 630px;
    z-index: 5;
  }

  @media (max-width: 1200px) {
    .shapeLeft {
      width: 250px;

      left: -20px;
      bottom: -20%;
    }

    .shapeRight {
      width: 300px;

      right: -20px;
      top: -20%;
    }

    iframe {
      width: 840px;
      height: 472.5px;
    }
  }

  @media (max-width: 768px) {
    .shapeLeft {
      width: 150px;

      left: -40px;
      bottom: -20%;
    }

    .shapeRight {
      width: 130px;

      right: -40px;
      top: -20%;
    }

    iframe {
      width: 560px;
      height: 315px;
    }
  }

  @media (max-width: 576px) {
    .shapeLeft {
      width: 150px;

      left: -40px;
      bottom: -20%;
    }

    .shapeRight {
      width: 130px;

      right: -40px;
      top: -20%;
    }

    iframe {
      width: 100%;
      height: 240px;
    }
  }
`;
