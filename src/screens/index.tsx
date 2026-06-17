import { useEffect, useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import TopBar from "../components/TopBar";
import Hero from "../components/hero";
import Projects from "../components/Projects";
import Now from "../components/Now";
import Experience from "../components/Experience";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Screen() {
  const { loading } = useContext(PortfolioContext);

  // Restore scroll position after data loads
  useEffect(() => {
    if (!loading) {
      const savedScroll = sessionStorage.getItem("portfolio_scroll_pos");
      if (savedScroll) {
        const scrollPos = parseInt(savedScroll, 10);
        const timer = setTimeout(() => {
          const rootEl = document.getElementById("root");
          if (rootEl) {
            rootEl.scrollTo({
              top: scrollPos,
              behavior: "smooth",
            });
          }
          window.scrollTo({
            top: scrollPos,
            behavior: "smooth",
          });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [loading]);

  // Listen to scroll and save position
  useEffect(() => {
    const rootEl = document.getElementById("root");

    const handleScroll = () => {
      if (rootEl) {
        // Only save scroll position if page is actually scrollable (prevents resets during unmounting)
        if (rootEl.scrollHeight > rootEl.clientHeight) {
          sessionStorage.setItem("portfolio_scroll_pos", rootEl.scrollTop.toString());
        }
      } else {
        const docEl = document.documentElement;
        if (docEl.scrollHeight > docEl.clientHeight) {
          sessionStorage.setItem("portfolio_scroll_pos", docEl.scrollTop.toString());
        }
      }
    };

    if (rootEl) {
      rootEl.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (rootEl) {
        rootEl.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground animate-page-enter">
      <TopBar />
      <main>
        <Hero />
        <Projects />
        <Now />
        <Experience />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Screen;
