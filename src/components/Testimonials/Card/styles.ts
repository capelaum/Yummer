import styled, { css } from "styled-components";

interface CardProps {
  isOrange: boolean;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  border-radius: var(--border-medium);

  padding: var(--spacing-medium);
  margin: var(--spacing-medium) 1.2rem;
  min-height: 12.5rem;

  ${({ isOrange }) => css`
    color: ${isOrange ? "var(--color-white)" : "var(--color-primary)"};
    background-color: ${isOrange
      ? "var(--color-secondary)"
      : "var(--color-white)"};
  `}
`;

export const User = styled.div`
  align-items: center;
  display: flex;
`;

export const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: var(--border-full);
`;

export const Name = styled.p`
  font-size: var(--font-size-small);
  font-weight: 600;
  margin-left: var(--spacing-small);
`;

export const Text = styled.blockquote<CardProps>`
  position: relative;
  display: grid;
  justify-items: end;

  margin-top: var(--spacing-xsmall);

  font-size: var(--font-size-small);
  line-height: var(--font-size-small);

  input {
    opacity: 0;
    position: absolute;
    pointer-events: none;

    &:checked + p {
      -webkit-line-clamp: unset;
    }
  }

  input:not(:checked) ~ p:not(.truncated) ~ label {
    display: none;
  }

  > p {
    padding-top: var(--spacing-xxsmall);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  label {
    cursor: pointer;
    float: right;
    font-weight: 600;
    margin-top: var(--spacing-small);
    color: ${({ isOrange }) =>
      isOrange ? "var(--color-primary)" : "var(--color-secondary)"};
  }
`;
