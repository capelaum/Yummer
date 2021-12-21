import styled from "styled-components";

export const CartPageContainer = styled.section`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .yummer_logo {
    width: 400px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .yummer_logo {
      width: 300px;
    }
  }

  @media (max-width: 360px) {
    .yummer_logo {
      width: 100%;
      padding: 0 1rem;
    }
  }
`;

export const Checkout = styled.section`
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
  h1 {
    text-align: center;
  }
`;
