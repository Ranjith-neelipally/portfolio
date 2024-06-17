import styled from "styled-components";
import { Colors } from "../../../utils/Colors";

interface ContainerProps {
  backgroundcolor?: string;
}

export const ContentContainer = styled.div<ContainerProps>`
  display: flex;
  background-color: ${Colors.surfaceContainer};
  flex: 1;
  border-radius: 12px;
  padding: 12px;
  overflow: auto;
  flex-direction: column;
`;
