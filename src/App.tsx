import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { RootElement, ContentWrapper } from "my-material-theme-ui-components";
import TopNavBarComponnet from "./components/TopNavBar";
import { toggleScreenSize } from "./Store/Action/Display";
import { useSelector } from "react-redux";

function App() {
  const Home = lazy(() => import("./components/Home"));
  const About = lazy(() => import("./components/About"));
  const Contact = lazy(() => import("./components/Contact"));
  const Work = lazy(() => import("./components/Projects"));
  const Skills = lazy(() => import("./components/Skills"));
  const Testimonials = lazy(() => import("./components/Testimonials"));
  const Admin = lazy(() => import("./components/Admin"));
  toggleScreenSize();
  const isSize = useSelector((state: any) => state.Display.isMobile);
  return (
    <RootElement
      className="overflow-auto"
      // $flexDirection={isSize ? "column" : "row"}
      // $padding="16px"
      $gap="16px"
    >
      <>
        <Router>
          <>
            <TopNavBarComponnet isMobile={isSize} />
          </>
          <>
            <>
              <ContentWrapper $backgroundColor="#ECE8DE">
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/testimonial" element={<Testimonials />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/Admin" element={<Admin />} />
                    <Route path="*" element={<>no Page Found</>} />
                  </Routes>
                </Suspense>
              </ContentWrapper>
            </>
          </>
        </Router>
      </>
    </RootElement>
  );
}

export default App;
