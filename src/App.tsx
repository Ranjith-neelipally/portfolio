import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ContentContainer } from "./components/CommonComponents/CommonStyles/styles";
import { RootElement } from "my-material-theme-ui-components";
import TopNavBarComponnet from "./components/TopNavBar";

function App() {
  const Home = lazy(() => import("./components/Home"));
  const About = lazy(() => import("./components/About"));
  const Contact = lazy(() => import("./components/Contact"));
  const Work = lazy(() => import("./components/Projects"));
  const Skills = lazy(() => import("./components/Resume"));
  const Testimonials = lazy(() => import("./components/Testimonials"));
  const Admin = lazy(() => import("./components/Admin"));

  return (
    <RootElement>
      <>
        <Router>
          <>
            <TopNavBarComponnet />
          </>
          <>
            <main className="d-flex flex-1 h-100 overflow-auto px-3">
              <ContentContainer backgroundcolor="#dddad0">
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
              </ContentContainer>
            </main>
          </>
        </Router>
      </>
    </RootElement>
  );
}

export default App;
