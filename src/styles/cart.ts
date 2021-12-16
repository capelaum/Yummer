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

  header {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: var(--color-secondary);
      font-size: 1.5rem;
      font-weight: 500;

      &:first-child {
        flex: 50%;
      }
    }
    .header_qtd_subtotal {
      flex: 50%;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const CheckoutItem = styled.div`
  padding: 2rem 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px dotted var(--color-gray-200);

  .item_description {
    flex: 50%;
    display: flex;
    align-items: center;

    .item_header {
      display: flex;
      flex-direction: column;

      padding-left: 1.25rem;

      h1 {
        font-size: 1.5rem;
        font-weight: 700;
        padding-bottom: 0.5rem;
      }

      span {
        font-size: 1.25rem;
        font-weight: 500;
      }
    }
  }

  .item_amount {
    flex: 50%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .item_subtotal {
      font-size: 1.25rem;
      font-weight: 500;
    }
  }
`;

export const CheckoutEnd = styled.div`
  width: 100%;

  padding-top: 3rem;

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

  span {
    font-size: 1rem;
    color: var(--color-secondary);
    font-weight: 500;
  }

  .checkout_total {
    padding-left: 0.5rem;
    font-size: 2rem;
    color: #fff;
    font-weight: 500;
  }
`;
