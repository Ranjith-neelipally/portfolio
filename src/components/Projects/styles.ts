import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 12px;

  .header-wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 8dvw;
    h1 {
      white-space: nowrap;
      color: #626117;
      font-size: clamp(3vw, 5vw, 3.2vw);
      margin: 0;
    }
    :last-child {
      text-align: end;
    }
  }

  .toolbar {
    display: flex;
    justify-content: flex-end;
    div {
      gap: 12px;
      display: flex;
      overflow: auto;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: auto;
    gap: 12px;
    height: 100%;
    max-width: 100%;
    padding: 8px;
  }
  @media (max-width: 720px) {
    .content {
      grid-template-columns: 1fr;
    }
  }
`;
