import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Components
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";

// Hooks & Data
import { useGithubProjects } from "./hooks/useGithubProjects";
import { roles, certificates, skills } from "./data";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [text, setText] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [active, setActive] = useState("home");

  const projects = useGithubProjects("Abhishek9885");

  // Typing effect for Hero section
  useEffect(() => {
    let i = 0, j = 0, current = "", deleting = false;
    const type = () => {
      current = roles[i];
      setText(current.substring(0, j));
      if (!deleting) {
        j++;
        if (j === current.length) deleting = true;
      } else {
        j--;
        if (j === 0) {
          deleting = false;
          i = (i + 1) % roles.length;
        }
      }
    };
    const t = setInterval(type, 80);
    return () => clearInterval(t);
  }, []);

  // Scroll spy for Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certificates", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${dark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"} font-sans transition-colors duration-500`}>
      <CustomCursor />
      
      {/* Background Grids */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none" />

      <Navbar active={active} dark={dark} setDark={setDark} />
      
      <Hero text={text} />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      <Certificates certificates={certificates} setSelectedCert={setSelectedCert} />
      <ContactSection />
      
      <Footer />

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
          onClick={() => setSelectedCert(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="max-w-4xl w-full relative"
          >
            <button className="absolute -top-10 right-0 text-white hover:text-cyan-400 text-xl font-bold">✕ Close</button>
            <img src={selectedCert.img} className="rounded-2xl w-full shadow-2xl border border-white/10" alt={selectedCert.title} />
            <p className="text-center mt-6 text-white text-xl font-medium tracking-wide">{selectedCert.title}</p>
          </motion.div>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="bg-slate-900 border border-white/10 p-8 rounded-2xl max-w-2xl w-full relative shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 text-xl font-bold transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <img 
              src={`https://opengraph.githubassets.com/1/${selectedProject.full_name}`} 
              className="rounded-xl mb-6 w-full shadow-lg" 
              alt={selectedProject.name} 
            />
            <h2 className="text-3xl font-display font-bold text-white mb-3">{selectedProject.name}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {selectedProject.description || "No description available"}
            </p>
            <div className="flex gap-4">
              <a 
                href={selectedProject.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300"
              >
                View Code
              </a>
              {selectedProject.demo && (
                <a 
                  href={selectedProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}