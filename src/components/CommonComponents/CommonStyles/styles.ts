import styled from "styled-components";

interface ContainerProps {
  backgroundcolor?: string;
  borderraduis?: number;
}

export const ContentContainer = styled.div<ContainerProps>`
  display: flex;
  background-color: ${(props) => props.backgroundcolor};
  transition: background-color 0.3s ease;
  flex: 1;
  border-radius: ${(props) => props.borderraduis}px;
  padding: 60px;
  overflow: auto;
  flex-direction: column;
`;
