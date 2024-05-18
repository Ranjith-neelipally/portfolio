import styled from "styled-components";

interface HomeComponentProps {
  backgroundImage?: string;
  ElementHeight?: number;
}

export const HomeComponent = styled.div<HomeComponentProps>`
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  justify-content: space-around;

  .profile-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;

    .designation {
      font-size: clamp(26px, 10vw, 60px);
      font-weight: 700;
      display: flex;
      flex-direction: column;
      flex: 1;

      p {
        margin: 0;
      }

      .human {
        margin: 0;
        margin-top: 2%;
        font-size: 24px;
        padding: 12px;
        border: 1px solid green;
        border-radius: 40px;
        background-color: lightgreen;
        color: black;
        transform: rotate(-5deg);
      }
      .location {
        font-size: clamp(32px, 2vw, 48px);
      }
    }

    .picture {
      max-height: 75vw;
      max-width: 75vw;
      height: ${(props) =>
        props.ElementHeight ? `${props.ElementHeight}px` : "300px"};
      width: ${(props) =>
        props.ElementHeight ? `${props.ElementHeight}px` : "300px"};
      background-image: url("src/assets/profile.jpeg");
      background-size: cover;
      border-radius: 50%;
      background-position: center;
    }
  }
`;
