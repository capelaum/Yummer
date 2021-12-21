import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding: 3rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const VideoContent = styled.div`
  width: 90%;
  max-width: 1120px;
  height: 630px;

  margin: 4rem 0;

  position: relative;

  .react-player {
    position: absolute;
  }

  .shape_left {
    position: absolute;
    left: -120px;
    bottom: -20%;

    width: 250px;
  }

  .shape_right {
    position: absolute;
    right: -100px;
    top: -100px;

    width: 200px;
  }

  @media (max-width: 900px) {
    height: 315px;

    .shape_left {
      left: -60px;
      bottom: -20%;

      width: 150px;
    }

    .shape_right {
      position: absolute;
      right: -60px;
      top: -60px;

      width: 150px;
    }
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`;
