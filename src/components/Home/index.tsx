import { useRef } from "react";
import { ContentContainer } from "../CommonComponents/CommonStyles/styles";
import { HomeComponent } from "./styles";
import ImageCard from "../CommonComponents/ImageCard";

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
        <button className="btn d-flex flex-column justify-content-center align-items-center">
          Welcome
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="30px"
            width="30px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
          </svg>
        </button>
      </HomeComponent>
    </ContentContainer>
  );
}

export default Home;
