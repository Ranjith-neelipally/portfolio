import styled, { css } from "styled-components";

interface ContainerProps {
  backgroundcolor?: string;
}

interface Flex1Props {
  $flexDirection?: string;
  $alignItems?: string;
  $justifyContent?: string;
}

export const Flex = css`
  display: flex;
`;

export const Flex1 = css`
  ${Flex}
  flex-wrap: wrap;
  flex: 1;
`;

export const ContentContainer = styled.div<ContainerProps>`
  ${Flex1}
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : "white"};
  border-radius: 12px;
  padding: 12px;
  overflow: auto;
  flex-direction: column;
`;

export const Flex1Container = styled.div<Flex1Props>`
  ${Flex1}
  flex-direction: ${({ $flexDirection }) =>
    $flexDirection ? $flexDirection : "row"};
  align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : "center")};
  justify-content: ${({ $justifyContent }) =>
    $justifyContent ? $justifyContent : "center"};
`;
