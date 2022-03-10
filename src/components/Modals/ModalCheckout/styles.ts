import styled from "styled-components";

export const ModalCustomStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Container = styled.form`
  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 3.5rem;
    border-radius: 50px;

    border: 2px solid #fff;
    background: var(--color-primary);
    color: #fff;

    font-weight: 400;
    font-size: 1.25rem;

    &::placeholder {
      color: var(--color-gray-200);
    }

    & + input {
      margin-top: 1.5rem;
    }

    &:focus {
      outline: none;
      color: #fff;

      border: 2px solid var(--color-secondary);
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0.8rem 1.5rem;
    background: var(--color-secondary);
    color: #fff;
    border-radius: 50px;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    span {
      padding-left: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    button[type="submit"] {
      padding: 0.8rem 1.5rem;
      font-size: 1.25rem;
    }
  }
`;
