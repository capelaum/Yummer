import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 1.25rem;

  a {
    color: #fff;

    transition: all 0.3s;

    &:hover {
      color: var(--color-secondary);
    }
  }

  a + a {
    margin-left: 1rem;
  }
`;
