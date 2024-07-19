import styled from "styled-components";

export const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  .header {
    display: flex;
    justify-content: end;
  }
  .body {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
`;
