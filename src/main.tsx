import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PortfolioProvider } from "./context/PortfolioContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PortfolioProvider>
    <App />
  </PortfolioProvider>,
);
