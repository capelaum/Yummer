import styled from "styled-components";

export const MenuNavContainer = styled.nav`
  margin: 20vw 1.25rem 0;

  display: flex;
  justify-content: space-around;

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
