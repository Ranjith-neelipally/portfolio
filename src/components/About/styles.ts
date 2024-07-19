import styled from "styled-components";
import { Flex1 } from "../CommonComponents/CommonStyles/styles";

export const AboutContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;

  .tool-bar {
    display: flex;
    justify-content: end;
  }

  .content-section {
    
    flex: 1;
    display: flex;
    flex-direction: column;
    
    border-radius: 12px;
    gap: 16px;

    .section {
      ${Flex1}
      color: #3e3e00;
      align-items: center;

      .highlighted-text {
        font-weight: 700;
        padding: 0 4px;
        border-radius: 4px;
        margin-left: 4px;
        
      }

      p {
        font-size: 2.5vh;
        font-weight: 400;
        line-height: 1.5;
        word-spacing: 2px;
        max-width: 60vw;
        font-weight: 500;
      }

      .current-company {
        color: #3e3e00;
      }
    }

    :last-child {
      justify-content: flex-end;
    }
  }
`;
