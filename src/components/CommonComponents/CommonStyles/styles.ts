import styled from "styled-components";

interface ContainerProps {
  backgroundColor?: string;
  backgroundImage?: string;
}

export const ContentContainer = styled.div<ContainerProps>`
  display: flex;
  background-color: ${(props) =>
  props.backgroundColor ? props.backgroundColor : "white"};
    
  flex: 1;
  border-radius: 12px;
  padding: 12px;
  overflow: auto;
  flex-direction: column;
`;
