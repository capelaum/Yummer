import styled from "styled-components";

export const CookiesContainer = styled.div`
  // width: 100%;
  margin: 3rem 1.25rem;
  padding: 2.5rem;
  width: 90%;

  background: var(--color-primary);
  color: #fff;
  max-width: 1200px;
  border-radius: 20px;
`;

export const CookieItem = styled.div`
  header {
    display: flex;
    align-items: flex-end;
    padding-bottom: 0.75rem;

    h2 {
      color: var(--color-secondary);
      font-weight: 800;
      font-size: 2.25rem;
      padding: 0;
    }

    span {
      padding-left: 0.8rem;
      padding-bottom: 0.3rem;
      font-weight: 500;
      font-size: 1.25rem;

      color: var(--color-gray-400);
    }
  }

  padding-bottom: 2.5rem;

  p {
    font-size: 1.25rem;
  }
`;
