import styled from "styled-components";

export const CartPageContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .yummer_logo {
    width: 400px;
    cursor: pointer;
  }
`;

export const Checkout = styled.section`
  width: 100%;
  min-height: calc(100vh - 262px);
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url("./Menu/bg_menu.png");
  background-repeat: repeat;
  background-size: 250px;
`;

export const CheckoutContainer = styled.div`
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

  footer {
    width: 100%;
    margin-top: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    button {
      padding: 1rem 4rem;
      border-radius: 50px;

      text-transform: uppercase;

      font-size: 1.5rem;
      font-weight: 500;

      color: white;
      background-color: var(--color-secondary);

      transition: all 0.3s;

      &:hover {
        scale: 1.05;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: flex-end;

  span {
    font-size: 1rem;
    color: var(--color-secondary);
    font-weight: 600;
    margin-bottom: 0.2rem;
  }

  .checkout_total {
    padding-left: 0.4rem;
    font-size: 2rem;
    color: #fff;
    font-weight: 500;
  }
`;
