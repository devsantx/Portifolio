import { useEffect, useState } from "react";
import "./global.css"


function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Atualiza a seção ativa
          }
        });
      },
      {
        threshold: 0.6, // Altera a seção quando 60% estiver visível
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-screen h-screen text-white">
      {/* <Navbar activeSection={activeSection} />
      <Home id="home" />
      <Technologies />
      <Projects  id="projects"/>
      <Experience id="experience" />
      <Feedbacks id="feedbacks"/>
      <Contact id="contact" />
      <Footer /> */}
    </div>
  );
}

export default App;
