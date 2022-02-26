import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding: 0rem 2rem;

  padding-bottom: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  @media (max-width: 576px) {
    padding-bottom: 7.5rem;
  }

  @media (max-width: 480px) {
    padding-bottom: 5rem;
  }
`;

export const VideoContent = styled.div`
  width: 80%;
  max-width: 1120px;

  margin: 2rem 0;

  position: relative;

  .shape_left {
    position: absolute;
    left: -80px;
    bottom: -15%;

    width: 200px;
  }

  .shape_right {
    position: absolute;
    right: -80px;
    top: -10%;

    width: 200px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 2rem;

    .shape_left {
      left: -60px;
      width: 150px;
    }

    .shape_right {
      right: -60px;
      width: 150px;
    }
  }

  @media (max-width: 576px) {
    width: 100%;

    .shape_left {
      display: none;
    }

    .shape_right {
      display: none;
    }
  }
`;

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;

  overflow: hidden;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  .react-player__play-icon {
    width: 100px;
    height: 100px;
    background: var(--color-primary);
  }

  .loader {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  svg {
    font-size: 7rem;
  }

  @media (max-width: 768px) {
    svg {
      font-size: 4rem;
    }
  }
`;
