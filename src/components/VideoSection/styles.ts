import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  @media (max-width: 576px) {
    padding: 2rem;
  }
`;

export const VideoContent = styled.div`
  width: 80%;
  max-width: 1120px;

  margin: 2rem 0;

  position: relative;

  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

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
