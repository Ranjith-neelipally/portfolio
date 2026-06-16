import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import TopNavBarComponnet from "./components/TopNavBar";
import { toggleScreenSize } from "./Store/Action/Display";
import { useSelector } from "react-redux";
import PortfolioPage from "./components/PortfolioPage";
import { configureTheme, RootElement } from "my-material-theme-ui-components";
function App() {
  const Home = lazy(() => import("./components/Home"));
  const About = lazy(() => import("./components/About"));
  const Contact = lazy(() => import("./components/Contact"));
  const Experience = lazy(() => import("./components/Experience"));
  const Work = lazy(() => import("./components/Projects"));
  const Testimonials = lazy(() => import("./components/Testimonials"));
  const Admin = lazy(() => import("./components/Admin"));
  const ProjectDetailPage = lazy(() => import("./components/Projects/projectid"));
  toggleScreenSize();
  const isSize = useSelector((state: any) => state.Display.isMobile);
  const [themeColor] = useState("#cccb75");
  useEffect(() => {
    configureTheme(themeColor);
  }, [themeColor]);

  return (
    <>
      <RootElement>
        <Router>
          <TopNavBarComponnet isMobile={isSize} />

          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* <Route path="/" element={<Navigate to="/ranjith" replace />} /> */}
              <Route
                path="/"
                // element={<PortfolioPage component={<Home />} />}
                element={<Home />}
              />
              <Route
                path="/about"
                element={<PortfolioPage component={<About />} />}
              />
              <Route
                path="/contact"
                element={<PortfolioPage component={<Contact />} />}
              />
              <Route
                path="/experience"
                element={<PortfolioPage component={<Experience />} />}
              />
             
              <Route
                path="/testimonial"
                element={<PortfolioPage component={<Testimonials />} />}
              />
              <Route
                path="/Projects"
                element={<PortfolioPage component={<Work />} />}
              />
              <Route
                path="/project/:projectId"
                element={<PortfolioPage component={<ProjectDetailPage />} />}
              />
              <Route path="/Admin" element={<Admin />} />
              <Route path="*" element={<>no Page Found</>} />
            </Routes>
          </Suspense>
        </Router>
      </RootElement>
    </>
  );
}

export default App;
