import { useState, useCallback, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  const [activeSection, setActiveSection] = useState("#hero");

  const handleSectionVisible = useCallback((sectionId) => {
    setActiveSection(sectionId);
  }, []);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <Hero onVisible={() => handleSectionVisible("#hero")} />
      <About onVisible={() => handleSectionVisible("#about")} />
      <Skills onVisible={() => handleSectionVisible("#skills")} />
      <Projects onVisible={() => handleSectionVisible("#projects")} />
      <Education onVisible={() => handleSectionVisible("#education")} />
      <Contact onVisible={() => handleSectionVisible("#contact")} />
      <Footer />
    </div>
  );
}

export default App;