import styled from "styled-components";

export const BannerContainer = styled.div`
  margin-top: 3rem;
  position: relative;
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

      box-shadow: rgba(234, 91, 19, 0.4) 5px 5px, rgba(234, 91, 19, 0.3) 10px 10px, rgba(234, 91, 19, 0.2) 15px 15px,
        rgba(234, 91, 19, 0.1) 20px 20px, rgba(234, 91, 19, 0.05) 25px 25px;
    }
  }

  .main_cookies_mobile {
    display: none;
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
      margin-bottom: 3.5rem;
    }

    .main_cookies {
      display: none;
    }

    .main_cookies_mobile {
      display: block;
    }
  }
`;

export const ShapeLeft = styled.div`
  border: 1px solid red;
  position: absolute;

  top: 40%;
  transform: translateY(-50%);
  left: 0;
  width: 35vw;

  z-index: -1;

  @media (min-width: 1920px) {
    width: 680px;
  }
`;

export const ShapeRight = styled.div`
  border: 1px solid red;
  position: absolute;

  top: 50%;
  transform: translateY(-50%);
  right: 0rem;
  width: 35vw;

  z-index: -1;

  @media (min-width: 1920px) {
    width: 730px;
  }
`;

export const Shape = styled.div`
  width: 100vw;
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
`;