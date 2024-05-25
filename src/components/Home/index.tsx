import { useRef } from "react";
import { ContentContainer } from "../CommonComponents/CommonStyles/styles";
import { HomeComponent } from "./styles";
import ImageCard from "../CommonComponents/ImageCard";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <ContentContainer>
      <HomeComponent ref={mainRef}>
        <div className="profile-wrapper">
          <div className="designation align-items-center align-items-md-start">
            <p className="human">Hi, Human! I am</p>
            <p className="w-100 text-center text-md-start">
              Ranjith Neelipally,
            </p>
            <p className="w-100 text-center">&lt;/Front-end, UX/UI&gt;</p>
            <p className="w-100 text-center">&lt;Developer&gt;</p>
            <p className="location">Based in Hyderabad</p>
            <p className="location">India</p>
          </div>
          <div className="d-flex justify-content-center justify-content-md-end">
            <ImageCard
              Elementref={mainRef}
              borderradius="50%"
              screenToBodyRadio={0.6}
              backgroundimage="https://i.ibb.co/XSbrwFq/profile.jpg"
            />
          </div>
        </div>
        <div>
          <Button variant="text">
            Hello world
            <>
              <ArrowDropDownIcon />
            </>
          </Button>
        </div>
      </HomeComponent>
    </ContentContainer>
  );
}

export default Home;
