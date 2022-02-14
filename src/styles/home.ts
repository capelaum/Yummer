import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
`;

export const BgContainer = styled.div`
  background-color: var(--color-background);
  background-image: url("./Menu/bg_menu.png");
  background-repeat: repeat;
  background-size: 300px;
  @media (max-width: 768px) {
    background-size: 100px;
  }
`;
