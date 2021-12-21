import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  background-color: var(--color-primary);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;

  padding: 1rem 1rem 0.25rem 1.25rem;

  color: #fff;

  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    padding: 1.25rem 1rem 0.25rem 1.25rem;
  }
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
      font-weight: 500;

      transition: all 0.3s;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .info {
      text-align: center;
      margin-left: 0;
      padding-top: 1.25rem;

      span {
        padding-top: 1rem;
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

  @media (max-width: 768px) {
    padding-top: 2rem;
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

  @media (max-width: 768px) {
    align-items: center;
    padding-top: 2rem;
  }
`;
