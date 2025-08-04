import { Header } from "./../../components/Header";
import { Hero } from "./../../components/Hero";
import { About } from "./../../components/About";
import { Skills } from "./../../components/Skills";
import { Contact } from "./../../components/Contact";
import { Footer } from "./../../components/Footer";
import Projects from "./../../components/Projects/Projects";
import { FaWhatsapp } from "react-icons/fa";

const index = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <a
        href="https://wa.me/5492613358209" // Reemplaza con tu número
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          zIndex: 1050,
        }}
        className="btn btn-success"
      >
        <FaWhatsapp size={32} />
      </a>
    </>
  );
};

export default index;
