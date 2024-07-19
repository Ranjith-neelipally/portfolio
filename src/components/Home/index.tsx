import { Flex1Container } from "../CommonComponents/CommonStyles/styles";
import { HomeComponent } from "./styles";
import ImageCard from "../CommonComponents/ImageCard";
import { useRef } from "react";
import { useAppSelector } from "../../Store/Provider";
import { GetAdminData } from "../../Store/Action/Admin";

function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const adminDetails = useAppSelector((state) => state.Admin);

  GetAdminData("ranjithkrn99@gmail.com");

  return (
    <>
      <HomeComponent ref={mainRef}>
        <Flex1Container $flexDirection="column">
          <>
            <div className="designation ">
              <p className="human">Hi, Human! I am</p>
              <p>
                {/* Wall-E */}
                {adminDetails.loading ? "loading" : adminDetails.data?.userName}
                ,
              </p>
              <p>&lt;/Full Stack Developer&gt;</p>
              {/* <p>&lt;/Full Time Eva Lover&gt;</p> */}
              {/* <p className="location">Based in Axiom</p> */}
              <p className="location">Based in Hyderabad</p>
              <p className="location">India</p>
              {/* <p className="location">Space</p> */}
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
