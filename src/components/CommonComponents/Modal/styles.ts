import styled, { css, keyframes } from "styled-components";
import { ModalProps } from ".";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const ModalContainer = styled.div<ModalProps>`
  display: ${({ $isModalOpen }) => ($isModalOpen ? "flex" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;

  ${({ $isModalOpen }) =>
    $isModalOpen &&
    css`
      animation: ${fadeIn} 0.5s ease both;
    `}
    
  backdrop-filter: blur(20px);
  transition: opacity 0.5s ease, backdrop-filter 0.5s ease;

  .content {
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    display: flex;
    width: fit-content;
    height: fit-content;
    flex-direction: column;
    min-width: 300px;
    max-width: 80%;
    

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      gap: 12px;

      .header-text,
      .close-btn {
        height: 35px;
      }

      .header-text {
        font-size: 24px;
        font-weight: bold;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .close-btn {
        align-self: flex-end;
        background: none;
        border: none;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
      }
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
    }
  }
`;
