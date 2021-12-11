import styled from "styled-components";

export const BannerContainer = styled.div`
  margin-top: 3rem;
  border: 1px solid red;

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
    border: none;
    font-size: 1.1rem;

    transition: all 0.3s;

    &:hover {
      // color: var(--color-secondary);

      box-shadow: rgba(234, 91, 19, 0.4) 5px 5px,
        rgba(234, 91, 19, 0.3) 10px 10px, rgba(234, 91, 19, 0.2) 15px 15px,
        rgba(234, 91, 19, 0.1) 20px 20px, rgba(234, 91, 19, 0.05) 25px 25px;
    }
  }

  @media (max-width: 678px) {
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
  /* height: ; */
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  div:nth-child(1),
  div:nth-child(2) {
    border: 1px solid red;
    position: absolute;

    width: 35vw;

    transform: translateY(-50%);
    z-index: -1;
  }

  .shape_left {
    left: 0;
    top: 40%;
  }

  .shape_right {
    right: 0;
    top: 50%;
  }

  .main_cookies_mobile {
    display: none;
  }

  @media (min-width: 1920px) {
    div:nth-child(1) {
      width: 680px;
    }

    div:nth-child(2) {
      width: 730px;
    }
  }

  @media (max-width: 678px) {
    .main_cookies {
      display: none;
    }

    .main_cookies_mobile {
      display: block;
    }
  }
`;
