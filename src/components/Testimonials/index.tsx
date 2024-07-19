import { useState } from "react";
import { GetAllTestimonials } from "../../Store/Action/Testimonial";
import { useAppSelector } from "../../Store/Provider";
import Card from "../CommonComponents/Card";
import { PrimaryButton } from "../CommonComponents/CommonStyles/styles";
import Modal from "../CommonComponents/Modal";

import { TestimonialContainer } from "./styles";

function Testimonials() {
  GetAllTestimonials();
  const AllData = useAppSelector((state) => state.Testimonials.data);
  const [isModal, setisModal] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    message: "",
    email: "",
  });
  const handleModal = () => {
    setisModal(!isModal);
  };

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const RenderModalBody = () => {
    return (
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="userName"
          onChange={handleForm}
        />
        <input type="email" name="email" onChange={handleForm} />
        <textarea
          placeholder="Enter Message"
          name="message"
          onChange={handleForm}
        ></textarea>
        <PrimaryButton type="submit">Submit</PrimaryButton>
      </form>
    );
  };

  return (
    <TestimonialContainer>
      <div className="header">
        <div>
          <PrimaryButton onClick={handleModal}>Add Testimonials</PrimaryButton>
          <Modal
            $isModalOpen={isModal}
            onbackdropClick={handleModal}
            closeModal={handleModal}
            childred={RenderModalBody()}
            cardHeader="Add Testimonials"
          />
        </div>
      </div>
      <div className="body">
        {AllData &&
          AllData.length > 0 &&
          AllData.map((item: any) => (
            <>
              <div style={{ display: "flex" }} key={item._id}>
                <Card
                  hideButton={true}
                  title={item.userName}
                  description={item.message}
                  $maxWidth={300}
                ></Card>
              </div>
            </>
          ))}
      </div>
    </TestimonialContainer>
  );
}

export default Testimonials;
