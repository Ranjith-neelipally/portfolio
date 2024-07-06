import styled from "styled-components";
import { Flex, Flex1 } from "../CommonComponents/CommonStyles/styles";

interface HomeComponentProps {
  backgroundImage?: string;
  ElementHeight?: number;
}

export const HomeComponent = styled.div<HomeComponentProps>`
  ${Flex1}
  flex-direction: row;

  .designation {
    ${Flex}
    font-size: clamp(26px, 10vw, 50px);
    font-weight: 700;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: flex-start;
    .human {
      font-size: 24px;
      padding: 12px;
      border-radius: 40px;
      background-color: #cccb75;
      color: black;
      transform: rotate(-5deg);
      line-height: 20px;
      font-weight: 600;
      width: fit-content;
    }

    p {
      width: 100%;
      text-align: start;
    }

    p:nth-child(4) {
      text-align: end;
    }

    .location {
      font-size: clamp(32px, 2vw, 48px);
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
