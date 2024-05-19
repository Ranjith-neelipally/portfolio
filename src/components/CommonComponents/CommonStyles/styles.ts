import styled from "styled-components";

interface ContainerProps {
  backgroundcolor?: string;
}

export const ContentContainer = styled.div<ContainerProps>`
  display: flex;
  background-color: ${(props) =>
  props.backgroundcolor ? props.backgroundcolor : "white"};
  flex: 1;
  border-radius: 12px;
  padding: 12px;
  overflow: auto;
  flex-direction: column;
`;
