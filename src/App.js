import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/NavbarPage";
import Header from "./components/Header/HeaderPage";
// import ReactParticle from "./components/React Particle/ReactParticle";
import About from "./components/About/AboutPage";
// import Skills from "./components/Skills/SkillsPage";
import ProjectPage from "./components/Projects/ProjectPage";
import ContactPage from "./components/Contact/ContactPage";
import FooterPage from "./components/Footer/FooterPage";
import ServicePage from "./components/Services/ServicePage";

function App() {
  return (
    <>
      {/* <ReactParticle /> */}
      <Navbar />
      <Header />
      <ServicePage />
      <About />
      {/* <Skills /> */}
      <ProjectPage />
      <ContactPage />
      <FooterPage />
    </>
  );
}

export default App;
