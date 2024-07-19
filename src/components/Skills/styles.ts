import styled from "styled-components";
import { SkillsProps } from ".";

const colors = ["#ADD8E6", "#FFC947", "#20B2AA"];
const fontColor = ["#005e7d", "#533a00", "#003532"];

export const SkillsContainer = styled.div<SkillsProps>`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 18%;
  flex-wrap: wrap;
  overflow: auto;
  flex-direction: column;
  .heading-text {
    margin: 0;
    color: #626117;
    font-size: clamp(3vw, 5vw, 3.2vw);
    max-width: 50%;
    text-align: center;
  }
  overflow: hidden;
`;

export const ContainerStyles = styled.div<SkillsProps>`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
`;

export const SkillsWrapper = styled.div<SkillsProps>`
  min-width: 250px;
  flex: 1;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow: auto;

  .header {
    border-radius: 10px 10px 0px 0px;
    padding: 10px;
    font-size: clamp(1vw, 5vw, 1.2vw);
    font-weight: bold;
  }

  .body {
    flex: 1;
    overflow: auto;
    background-color: white;
    list-style: none;
    margin: 0;
    padding: 0;
    padding-bottom: 12px;
    border-radius: 0px 0px 10px 10px;
    font-size: clamp(0.6vw, 3vw, 1.2vw);

    li {
      padding: 12px 20px;
      border-bottom: 1px solid #ccc;
      font-weight: 600;
    }
  }
  &:first-child {
    animation: slideInFromLeft 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55)
      forwards;
    .header {
      color: ${fontColor[0]};
      background-color: ${colors[0]};
    }
    .body {
        li{
            font-weight: 600;
            transform: perspective(12000);
        }
    }
  }
  &:nth-child(2) {
    animation: ForFirst 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
    .header {
      background-color: ${colors[1]};
      color: ${fontColor[1]};
    }
  }
  &:nth-child(3) {
    animation: slideInFromRight 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55)
      forwards;
    .header {
      background-color: ${colors[2]};
      color: ${fontColor[2]};
    }
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%) rotate(90deg);
      opacity: 0;
    }
    100% {
      transform: translateX(0) rotate(2deg);
      opacity: 1;
    }
  }

  @keyframes ForFirst {
    0% {
      transform: translateX(-100%) rotate(-78deg);
      opacity: 0;
    }
    100% {
      transform: rotate(-7deg) translateX(-10%) translateY(12%);
    }
  }

  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%) rotate(90deg);
      opacity: 0;
    }
    100% {
      transform: rotate(2deg) translateX(-15%);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    &:first-child {
      transform: unset;
      animation: unset;
    }
    &:nth-child(2) {
      transform: unset;
      animation: unset;
    }
    &:nth-child(3) {
      transform: unset;
      animation: unset;
    }
  }
`;
