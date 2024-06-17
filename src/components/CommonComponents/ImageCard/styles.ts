import styled from "styled-components";

interface ImageContinerProps {
  backgroundimage?: string;
  elementheight?: number;
  borderradius?: string;
}
export const ImageContiner = styled.div<ImageContinerProps>`
  max-height: 75vw;
  max-width: 75vw;
  height: ${(props) =>
    props.elementheight ? `${props.elementheight}px` : "300px"};
  width: ${(props) =>
    props.elementheight ? `${props.elementheight}px` : "300px"};
  background-image: url(
    ${(props) => (props.backgroundimage ? props.backgroundimage : "")}
  );
  background-size: cover;
  border-radius: ${(props) => (props.borderradius ? props.borderradius : "12px")};
  background-position: center;
`;
