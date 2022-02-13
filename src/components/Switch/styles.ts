import styled from "styled-components";

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 3rem;
`;

export const Switcher = styled.label`
  position: relative;
  display: inline-block;
  width: 115px;
  height: 34px;

  .message {
    position: absolute;
    top: 38px;

    color: var(--color-gray-400);

    font-size: 0.75rem;
    text-align: center;

    padding: 0 0.1rem;
  }

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-secondary);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50px;

    &:before {
      position: absolute;
      content: "";
      height: 24px;
      width: 3.75rem;
      left: 6px;
      bottom: 5px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50px;
    }
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(64px);
    -ms-transform: translateX(64px);
    transform: translateX(64px);
    width: 2.5rem;
    left: 12px;
  }

  input:checked + .size-100 {
    color: #fff;
  }

  @media (min-width: 1080px) {
    width: 122px;
  }
`;

interface SizesProps {
  isChecked: boolean;
}

export const Sizes = styled.span<SizesProps>`
  span {
    position: absolute;
    cursor: pointer;

    font-weight: 700;
    top: 8px;
    z-index: 1;
  }

  #size-100 {
    color: ${({ isChecked }) => (isChecked ? "fff" : "var(--color-primary)")};
    left: 16px;
  }

  #size-45 {
    color: ${({ isChecked }) => (isChecked ? "var(--color-primary)" : "fff")};
    left: 80px;
  }
`;
