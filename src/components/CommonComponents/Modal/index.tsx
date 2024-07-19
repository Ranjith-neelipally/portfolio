import React from "react";
import { ModalContainer } from "./styles";
import { PrimaryButton } from "../CommonStyles/styles";
export interface ModalProps {
  $isModalOpen?: boolean;
  closeModal?: () => void;
  onbackdropClick?: () => void;
  childred?: React.ReactNode;
  cardHeader?: string;
}

function Modal({
  $isModalOpen,
  closeModal,
  onbackdropClick,
  childred = <>hello world</>,
  cardHeader = "sample header",
}: ModalProps) {
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <ModalContainer $isModalOpen={$isModalOpen} onClick={onbackdropClick}>
      <div className="content" onClick={handleContentClick}>
        <div className="modal-header">
          <div className="header-text" title={cardHeader}>
            {cardHeader}
          </div>
          <button
            className="close-btn"
            title="close modal"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <div className="modal-body">{childred}</div>
        <div className="modal-footer">
          <div>
            <PrimaryButton onClick={closeModal}>Close</PrimaryButton>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

export default Modal;
