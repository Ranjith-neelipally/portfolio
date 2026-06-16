import { useState } from "react";
import { GetAllTestimonials } from "../../Store/Action/Testimonial";
import { useAppSelector } from "../../Store/Provider";
import {
  RootElement,
  Button,
  Card,
  Modal,
  Input,
  TextArea,
  Typography,
  Grid,
} from "my-material-theme-ui-components";

const Root = RootElement as any;
const LibButton = Button as any;

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
    console.log(formData);
    // Handle form submission logic here
    handleModal();
  };

  return (
    <Root 
      $padding="40px 24px" 
      $backgroundColor="transparent"
      style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "24px" }}
    >
      <Root
        $backgroundColor="transparent"
        $padding="0"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <LibButton 
          onClick={handleModal}
          $backgroundColor="#2b59db"
          $fontColor="#ffffff"
          $borderRadius="9999px"
          $padding="10px 20px"
          $fontWeight="600"
          $border="none"
          $cursor="pointer"
        >
          Add Testimonial
        </LibButton>
      </Root>

      <Grid columns={3} gap="24px">
        {AllData && AllData.length > 0 ? (
          AllData.map((item: any) => (
            <Card
              key={item._id}
              hideButton={true}
              title={item.userName}
              description={item.message}
            />
          ))
        ) : (
          <Typography variant="body" style={{ gridColumn: "span 3", textAlign: "left" }}>
            No testimonials found.
          </Typography>
        )}
      </Grid>

      {/* Testimonials Form Modal */}
      <Modal
        isOpen={isModal}
        onClose={handleModal}
        title="Add Testimonials"
        size="md"
      >
        <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "12px 0" }}>
          <Input
            label="Name"
            type="text"
            placeholder="Enter Name"
            name="userName"
            value={formData.userName}
            onChange={handleForm}
            fullWidth={true}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleForm}
            fullWidth={true}
          />
          <TextArea
            label="Message"
            placeholder="Enter Message"
            name="message"
            value={formData.message}
            onChange={handleForm}
            fullWidth={true}
            rows={4}
          />
          <Root $padding="0" $backgroundColor="transparent" style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
            <LibButton 
              type="submit"
              $backgroundColor="#2b59db"
              $fontColor="#ffffff"
              $borderRadius="9999px"
              $padding="10px 20px"
              $fontWeight="600"
              $border="none"
              $cursor="pointer"
            >
              Submit
            </LibButton>
          </Root>
        </form>
      </Modal>
    </Root>
  );
}

export default Testimonials;
