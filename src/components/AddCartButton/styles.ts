import styled from "styled-components";

export const AddCartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 0 1rem 0 5rem;

  background-color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 10px;

  transition: all 0.3s;

  .addCartIcon {
    font-size: 1.5rem;
  }

  span {
    padding-left: 0.75rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  &:focus {
    span {
      color: var(--color-secondary);
    }
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
