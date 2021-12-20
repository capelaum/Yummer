import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding: 1rem 1.25rem;

  background-color: var(--color-primary);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;

  color: #fff;

  display: flex;
  justify-content: space-between;

  border: 1px solid red;
`;

export const ContentLeft = styled.div`
  display: flex;
  align-items: center;

  .info {
    display: flex;
    flex-direction: column;

    margin-left: 1rem;

    a {
      color: var(--color-secondary);
      padding-bottom: 0.25rem;

      transition: all 0.3s;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #fff;
    font-weight: 700;
    font-size: 1.25rem;

    transition: all 0.3s;

    &:hover {
      color: var(--color-secondary);
    }
  }

  .social_icons {
    display: flex;
    padding-top: 1.25rem;

    a + a {
      margin-left: 1rem;
    }
  }
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  font-size: 0.9rem;

  a {
    color: #fff;
    padding-left: 0.25rem;

    transition: all 0.3s;

    &:hover {
      color: var(--color-secondary);
    }
  }
`;
