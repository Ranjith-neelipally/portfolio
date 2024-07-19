import {
  ContentContainer,
  PrimaryButton,
} from "../CommonComponents/CommonStyles/styles";
import { AboutContainer } from "./styles";

function About() {
  return (
    <ContentContainer>
      <AboutContainer>
        <div className="tool-bar">
          <div>
            <PrimaryButton>Download CV</PrimaryButton>
          </div>
        </div>
        <div className="content-section">
          <div className="section">
            <>
              <p>
                Hey there! I'm Ranjith Neelipally,
                <span className="highlighted-text">
                  a front-end developer with 1.7 years of experience in
                  transforming caffeine into &lt;&gt; code &lt;/&gt;
                </span>
                . Currently, I'm weaving my magic at{" "}
                <a
                  href="https://www.arcadis.com/en"
                  className="current-company"
                  target="_blank"
                  tabIndex={0}
                  title="Arcadis"
                >
                  Arcadis
                </a>
                , where I build user interfaces smoother than your morning
                coffee. I graduated in 2023 from GuruNanak Institute of
                Technology, and ever since, I've been on a mission to make the
                web a more beautiful place, one pixel at a time.
              </p>
            </>
          </div>
          <div className="section">
            <>
              <p>
                When I'm not busy debugging or creating stunning UI/UX designs,
                you might find me hitting the gym, zooming around on my bicycle
                or motorcycle, or crafting eye-catching posters. With a knack
                for React.js, Redux Toolkit, and all things front-end, I'm ready
                to bring my A-game to new and exciting opportunities.{" "}
                <span className="highlighted-text">
                  So, if you're looking for a developer who can blend technical
                  prowess with a sprinkle of humor, let's connect and create
                  something amazing together!
                </span>
              </p>
            </>
          </div>
        </div>
      </AboutContainer>
    </ContentContainer>
  );
}

export default About;
