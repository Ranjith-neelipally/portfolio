import { useState } from "react";
import { PrimaryButton } from "../CommonStyles/styles";
import Modal from "../Modal";
import { StyledCard } from "./styles";
export interface CardProps {
  id?: string;
  previewImage?: string;
  title?: string;
  description?: string;
  $maxWidth?: number;
  hideButton?: boolean;
}

function Card({
  id,
  previewImage,
  title,
  description,
  $maxWidth,
  hideButton,
}: CardProps) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const handleModal = () => {
    setisModalOpen(!isModalOpen);
  };

  return (
    <StyledCard id={id}>
      <div className="card-body">
        {previewImage && (
          <div className="image-section">
            <img
              src={previewImage}
              alt="project preview"
              className="preview-image"
            />
          </div>
        )}
        <div className="project-preview">
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="description">{description}</p>
          </div>
          {!hideButton && (
            <div>
              <PrimaryButton onClick={handleModal}>View Project</PrimaryButton>
            </div>
          )}
        </div>
      </div>
      {!hideButton && (
        <Modal
          $isModalOpen={isModalOpen}
          onbackdropClick={handleModal}
          closeModal={handleModal}
          cardHeader={title}
        />
      )}
    </StyledCard>
  );
}

export default Card;
