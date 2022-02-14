import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
`;

export const BgContainer = styled.div`
  &:before {
    content: "";
    position: absolute;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-top: 100px solid rgba(245, 245, 245, 0.8);
    border-bottom: 100px solid rgba(245, 245, 245, 0.5);
  }

  position: relative;

  background-attachment: fixed;

  background-color: var(--color-background);
  background-image: url("./Menu/bg_menu.png");
  background-repeat: repeat;
  background-size: 300px;
  @media (max-width: 768px) {
    background-size: 100px;
  }
`;
