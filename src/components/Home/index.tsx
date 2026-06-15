import { Flex1Container } from "../CommonComponents/CommonStyles/styles";
import { HomeComponent } from "./styles";
import ImageCard from "../CommonComponents/ImageCard";
import { useRef } from "react";
import { useAppSelector } from "../../Store/Provider";

function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const adminDetails = useAppSelector((state) => state.Admin);

  return (
    <>
      <HomeComponent ref={mainRef}>
        <Flex1Container $flexDirection="column">
          <>
            <div className="designation ">
              <p className="human">Hi, Human! I am</p>
              <p>
             
                {adminDetails.loading ? "loading" : adminDetails.data?.userName?adminDetails.data?.userName:"Ranjith Neelipallly"}
                ,
              </p>
              <p>&lt;/Full Stack Developer&gt;</p>
              <p className="location">Based in Hyderabad</p>
              <p className="location">India</p>
            </div>
          </>
        </Flex1Container>
        <Flex1Container>
          <ImageCard
            $backgroundimage={adminDetails.data?.profilePic}
            $Elementref={mainRef}
            $borderradius="50%"
            $screenToBodyRadio={0.35}
          />
        </Flex1Container>
      </HomeComponent>
    </>
  );
}

export default Home;
