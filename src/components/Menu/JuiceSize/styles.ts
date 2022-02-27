import styled from "styled-components";

export const JuiceSizeContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 3rem;
  padding-right: 1.25rem;

  span {
    font-size: 1.1rem;
    font-weight: 600;

    padding: 0.5rem 0.75rem;
    border-radius: 50px;
    background-color: var(--color-secondary);
  }

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;
