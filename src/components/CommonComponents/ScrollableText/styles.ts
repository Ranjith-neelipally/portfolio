import styled from "styled-components";

export const ScrollableTextStyles = styled.div`
  white-space: nowrap;
  display: flex;
  overflow: hidden;
  font-size: 60px;
  font-weight: 700;

  .RightToLeft {
    animation: RightToLeft 10s infinite linear;
    display: flex;
  }

  .LeftToRight {
    animation: LeftToRight 10s infinite linear;
    display: flex;
  }

  @keyframes RightToLeft {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(-20%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes LeftToRight {
    0% {
      transform: translateX(-20%);
    }
    50% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-20%);
    }
  }
`;
