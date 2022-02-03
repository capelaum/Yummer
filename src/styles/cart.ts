import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  margin-top: 3rem;

  width: 400px;

  .yummer_logo {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const Checkout = styled.main`
  width: 100%;
  margin-top: 4rem;

  min-height: calc(100vh - 320px);

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url("./Menu/bg_menu.png");
  background-repeat: repeat;
  background-size: 250px;
`;

export const CartContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
  background: var(--color-primary);

  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const EmptyCart = styled(CartContainer)`
  justify-content: center;
  /* flex-direction: row; */
  padding: 1rem;
  width: auto;
  margin-top: 4rem;

  .text {
    display: flex;
    justify-content: center;

    span {
      text-align: center;
      margin-left: 0.5rem;
      font-weight: 600;
      font-size: 1.125rem;
    }
  }

  button {
    color: #fff;
    background-color: var(--color-secondary);

    padding: 0.25rem 1rem;
    margin-top: 1.25rem;

    border-radius: 50px;
    font-weight: 500;
    font-size: 1.125rem;

    transition: all 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
