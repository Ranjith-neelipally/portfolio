import styled from "styled-components";
import {ColorSchemes} from './utils/Colors/colors'

export const StyledApp = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
  font-family: "Nunito", sans-serif;
  background-color: ${ColorSchemes.light.surfaceContainerHighest};
  padding: calc(1vh * 4.5) calc(1vw*10);
  gap: 12px;
`;
