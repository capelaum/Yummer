import styled from "styled-components";

export const BannerContainer = styled.header`
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const BannerHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  animation: fade-in 2s both;

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
    font-size: 1.125rem;

    transition: all 0.3s;

    &:hover {
      background-color: var(--color-secondary);
    }
  }

  @media (max-width: 768px) {
    .yummer_logo {
      width: 300px;
    }

    p {
      font-size: 1.2rem;
      padding: 0 1rem;
    }

    button {
      font-size: 1.25rem;
      margin-bottom: 4rem;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
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

    /* transform: translateX(0, -50%); */
  }

  .shape_left {
    animation: slide-left 1s both;
    left: 0;
    top: 40%;
  }

  .shape_right {
    animation: slide-rigth 1s both;

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

  @keyframes slide-left {
    0% {
      transform: translate(-1000px, -50%);
    }
    100% {
      transform: translate(0, -50%);
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
`;
