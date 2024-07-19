import styled from "styled-components";
import { CardProps } from ".";

export const StyledCard = styled.div<CardProps>`
  display: flex;
  width: 100%;
  background-color: #f7f3e9;
  padding: 12px;
  gap: 12px;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);

  .card-body {
    display: flex;
    flex-direction: row;
    gap: 12px;
    overflow: auto;
    .image-section {
      display: flex;
      flex: 1;
      .preview-image {
        width: 100%;
        height: auto;
        border-radius: 8px;
      }
    }
    .project-preview {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: auto;
      gap: 12px;
      justify-content: space-between;
      max-width: 100%;
      .card-content {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 4px;
      }
      .card-title {
        font-size: 1.5rem;
        color: #494900;
        margin: 0;
        font-weight: 700;
        line-height: 1.5;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .description {
        font-size: 1rem;
        color: #494900;
        margin: 0;
        font-weight: 600;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
      }
    }
  }

  @media (max-width: 1280px) {
    .card-body {
      flex-direction: column;
    }
  }
`;
