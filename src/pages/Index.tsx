import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Resume from "@/components/Resume";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-white">
        <Hero />
      </div>
      <div className="bg-gray-50">
        <About />
      </div>
      <div className="bg-white">
        <Education />
      </div>
      <div className="bg-gray-50">
        <Skills />
      </div>
      <div className="bg-white">
        <Experience />
      </div>
      <div className="bg-gray-50">
        <Projects />
      </div>
      <div className="bg-white">
        <Certifications />
      </div>
      <div className="bg-gray-50">
        <Resume />
      </div>
      <div className="bg-white">
        <Contact />
      </div>
      <div className="bg-gray-50">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
