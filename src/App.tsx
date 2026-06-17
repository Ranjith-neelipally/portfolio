import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, useContext } from "react";
import Screen from "./screens";
import ProjectDetailPage from "./components/Projects/projectid";
import { PortfolioContext } from "./context/PortfolioContext";

function LoadingScreen() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <span className="font-mono-x text-xs uppercase tracking-[0.18em] text-foreground">
        Loading<span className="ml-1 cursor-blink text-accent">▌</span>
      </span>
    </div>
  );
}

function App() {
  const { loading } = useContext(PortfolioContext);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Screen />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
