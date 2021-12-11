import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MenuNav = styled.nav`
  margin: 20vw 1.25rem 0;

  display: flex;
  justify-content: space-between;

  width: 90%;
  max-width: 1200px;
  padding: 0 1.25rem 1rem;
  border-bottom: 1px solid var(--color-gray-200);

  @media (min-width: 1920px) {
    margin: 25rem 1.25rem 0;
  }
`;

export const MenuNavButton = styled.button`
  background: none;
  border: none;
  font-size: 2.25rem;
  font-weight: 500;
  color: var(--color-primary);

  & + & {
    padding-left: 1rem;
  }
`;

export const Menu = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-image: url("./Menu/bg_menu.png");
  background-repeat: repeat;
  background-size: 300px;
`;
