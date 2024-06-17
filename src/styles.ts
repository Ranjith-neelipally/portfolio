import styled from "styled-components";

interface ContainerProps {
  backgroundcolor?: string;
}

export const AppContainer = styled.div<ContainerProps>`
  padding: 120px 40px;
  background-color: ${(props) => props.backgroundcolor};
`;
