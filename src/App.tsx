import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import { Suspense, lazy } from "react";
import { AdminProvider } from "./Store/Provider/AdminProvider";
import { Provider } from "react-redux";
import { store } from "./Store/ReduxStore";

function App() {
  const Home = lazy(() => import("./components/Home"));
  const About = lazy(() => import("./components/About"));
  const Contact = lazy(() => import("./components/Contact"));
  const Work = lazy(() => import("./components/Projects"));
  const Skills = lazy(() => import("./components/Resume"));
  const Testimonials = lazy(() => import("./components/Testimonials"));
  const Admin = lazy(() => import("./components/Admin"));

  return (
    <Provider store={store}>
      <Router>
        <>
          <TopNavBar />
        </>
        <AdminProvider>
          <main className="d-flex flex-1 h-100 overflow-auto bg-light px-3">
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
          </main>
        </AdminProvider>
      </Router>
    </Provider>
  );
}

export default App;
