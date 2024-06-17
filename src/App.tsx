import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { ContentContainer } from "./components/CommonComponents/CommonStyles/styles";
import { useAppDispatch, useAppSelector } from "./Store/Provider";
import { getColorScheme } from "./utils/Colors";
import { AppContainer } from "./styles";

function App() {
  const Home = lazy(() => import("./components/Home"));
  const About = lazy(() => import("./components/About"));
  const Contact = lazy(() => import("./components/Contact"));
  const Work = lazy(() => import("./components/Projects"));
  const Skills = lazy(() => import("./components/Resume"));
  const Testimonials = lazy(() => import("./components/Testimonials"));
  const Admin = lazy(() => import("./components/Admin"));

  const useTheme = useAppSelector((state) => state.Theme);
  const dispatch = useAppDispatch();

  console.log(useTheme.currentTheme);

  const themeColors = getColorScheme(useTheme.currentTheme);

  return (
    <AppContainer backgroundcolor={themeColors.surfaceContainerHigh}>
      <>
        <Router>
          <>
            <TopNavBar backgroundcolor={themeColors.surfaceContainerHigh} />
          </>
          <>
            <main className="d-flex flex-1 h-100 overflow-auto px-3">
              <ContentContainer
                backgroundcolor={themeColors.surfaceContainerHigh}
              >
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
    </AppContainer>
  );
}

export default App;
