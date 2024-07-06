import { Flex1Container } from "../CommonComponents/CommonStyles/styles";
import { HomeComponent } from "./styles";
import ImageCard from "../CommonComponents/ImageCard";
import { useRef } from "react";

function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <HomeComponent ref={mainRef}>
        <Flex1Container $flexDirection="column">
          <>
            <div className="designation ">
              <p className="human">Hi, Human! I am</p>
              <p>Ranjith Neelipally,</p>
              <p>&lt;/Front-end, UX/UI&gt;</p>
              <p>&lt;Developer&gt;</p>
              <p className="location">Based in Hyderabad</p>
              <p className="location">India</p>
            </div>
          </>
        </Flex1Container>
        <Flex1Container>
          <ImageCard
            $backgroundimage="https://i.ibb.co/XSbrwFq/profile.jpg"
            $Elementref={mainRef}
            $borderradius="50%"
            $screenToBodyRadio={0.6}
          />
        </Flex1Container>
      </HomeComponent>
    </>
  );
}

export default Home;
