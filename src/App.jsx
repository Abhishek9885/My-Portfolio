import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload ,FaInstagram, FaBrain , FaEnvelope , FaDatabase , FaHtml5 , FaCss3Alt } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCplusplus , SiMysql , SiExpress  } from "react-icons/si";
import profile from "./assets/your-image.jpg";
import certi1 from "./assets/certi1.jpg";
import certi2 from "./assets/certi2.jpg";
import certi3 from "./assets/certi3.jpg";
import certi4 from "./assets/certi4.jpg";
import certi5 from "./assets/certi5.jpg";
import certi6 from "./assets/certi6.jpg";
import certi7 from "./assets/certi7.jpg";


function useSparkles(canvasRef, glow, active) {
  const particles = useRef([]);
  const rafRef    = useRef(null);
  const ivRef     = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      const r = canvas.parentElement?.getBoundingClientRect();
      canvas.width  = r?.width  || 180;
      canvas.height = r?.height || 120;
    };
    resize();
    const spawn = () => {
      for (let i = 0; i < 5; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2.2 + 0.8,
          dx: (Math.random() - 0.5) * 1.1,
          dy: (Math.random() - 0.5) * 1.1 - 0.3,
          life: 1,
          decay: Math.random() * 0.018 + 0.012,
        });
      }
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter(p => p.life > 0);
      for (const p of particles.current) {
        ctx.save();
        ctx.globalAlpha = p.life * 0.9;
        ctx.fillStyle   = glow;
        ctx.shadowColor = glow;
        ctx.shadowBlur  = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        p.x += p.dx; p.y += p.dy; p.life -= p.decay;
      }
    };
    if (active) {
      resize();
      ivRef.current = setInterval(spawn, 180);
      const loop = () => { draw(); rafRef.current = requestAnimationFrame(loop); };
      loop();
    } else {
      clearInterval(ivRef.current);
      cancelAnimationFrame(rafRef.current);
      particles.current = [];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    return () => { clearInterval(ivRef.current); cancelAnimationFrame(rafRef.current); };
  }, [active, glow, canvasRef]);
}

function SkillCard({ s }) {
  const [hovered, setHovered] = useState(false);
  const canvasRef = useRef(null);
  useSparkles(canvasRef, s.glow, hovered);
  return (
    <div
      style={{ perspective: "900px", height: "110px", minWidth: "155px", position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: "absolute", inset: "-2px", borderRadius: "9999px",
        background: `conic-gradient(from var(--sk-angle,0deg), transparent 0deg, ${s.glow} 60deg, transparent 120deg)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s",
        animation: hovered ? "skillSpinBorder 2s linear infinite" : "none", zIndex: 0,
      }} />
      <div style={{ position: "absolute", inset: "2px", borderRadius: "9999px", background: "#060e1c", zIndex: 0 }} />
      <div style={{
        position: "relative", width: "100%", height: "100%",
        transformStyle: "preserve-3d",
        transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)", zIndex: 1,
      }}>
        <div style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", position: "absolute", inset: 0 }}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full
            bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30
            backdrop-blur-lg shadow-lg hover:shadow-cyan-400/50 transition duration-300">
          <span className="text-xl">{s.icon}</span>
          <span>{s.name}</span>
        </div>
        <div style={{
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          position: "absolute", inset: 0, transform: "rotateY(180deg)",
          borderRadius: "1rem", border: `1px solid ${s.glow}55`,
          background: "linear-gradient(145deg,#0c1a2e,#091528)",
          boxShadow: `0 0 22px ${s.glow}22`,
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "12px 14px", gap: "8px", overflow: "hidden",
        }}>
          <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", borderRadius: "1rem" }} />
          <div style={{ position: "absolute", top: 10, right: 12, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: s.glow, opacity: 0.15, animation: "skillPulseRing 1.8s ease-out infinite" }} />
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: s.glow, opacity: 0.08, animation: "skillPulseRing 1.8s 0.6s ease-out infinite" }} />
            <span style={{ fontSize: 13, position: "relative", zIndex: 1, color: s.glow, display: "flex", alignItems: "center" }}>{s.icon}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
            <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: s.glow, fontWeight: 500 }}>{s.level}</span>
            <div style={{ display: "flex", gap: 3 }}>
              {Array.from({ length: 5 }, (_, di) => (
                <div key={di} style={{ width: 6, height: 6, borderRadius: "50%", background: di < s.dots ? s.glow : "rgba(255,255,255,0.1)", boxShadow: di < s.dots ? `0 0 5px ${s.glow}` : "none" }} />
              ))}
            </div>
          </div>
          <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.07)", position: "relative", zIndex: 1 }} />
          <p style={{ fontSize: 10.5, color: "#a0bdd4", lineHeight: 1.55, fontWeight: 300, position: "relative", zIndex: 1 }}>{s.desc}</p>
        </div>
      </div>
    </div>
  );
}


function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus]     = useState("idle");
  const [focused, setFocused]   = useState("");

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body    = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:singhabhishek4964@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  const inputBase = {
    width: "100%", background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(56,189,248,0.2)", borderRadius: "12px",
    padding: "14px 18px", color: "#e0eaff", fontSize: "14px",
    outline: "none", transition: "border-color 0.3s, box-shadow 0.3s", fontFamily: "inherit",
  };
  const focusedStyle = { borderColor: "rgba(56,189,248,0.7)", boxShadow: "0 0 0 3px rgba(56,189,248,0.1)" };
  const getStyle = (name) => ({ ...inputBase, ...(focused === name ? focusedStyle : {}) });

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-10 py-20 relative overflow-hidden"
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[200px] bg-cyan-400/10 blur-3xl pointer-events-none" />
      <div style={{ position:"absolute", bottom:-60, left:"10%", width:220, height:220, borderRadius:"50%", background:"rgba(129,140,248,0.06)", filter:"blur(60px)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"30%", right:"5%", width:180, height:180, borderRadius:"50%", background:"rgba(56,189,248,0.05)", filter:"blur(50px)", pointerEvents:"none" }} />

      <div className="text-center mb-14" style={{ position:"relative", zIndex:1 }}>
        <p style={{ fontFamily:"monospace", fontSize:11, letterSpacing:"3.5px", textTransform:"uppercase", color:"#38bdf8", marginBottom:12 }}>// let's talk</p>
        <h2 className="text-4xl font-bold" style={{ textShadow:"0 0 40px rgba(56,189,248,0.35), 0 0 80px rgba(56,189,248,0.15)" }}>Get In Touch</h2>
        <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm">Have a project in mind, want to collaborate, or just say hi? My inbox is always open.</p>
      </div>

      <div style={{
        position:"relative", zIndex:1, maxWidth:640, margin:"0 auto",
        background:"rgba(255,255,255,0.02)", border:"1px solid rgba(56,189,248,0.12)",
        borderRadius:24, padding:"40px 36px", backdropFilter:"blur(16px)",
        boxShadow:"0 0 60px rgba(56,189,248,0.05)",
      }}>
        <div style={{ position:"absolute", top:0, left:"10%", right:"10%", height:2, background:"linear-gradient(90deg, transparent, #38bdf8, #818cf8, transparent)", borderRadius:99 }} />

        {status === "sent" ? (
          <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} className="text-center py-10">
            <div style={{ width:64, height:64, borderRadius:"50%", background:"rgba(56,189,248,0.1)", border:"2px solid #38bdf8", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px", fontSize:28 }}>✓</div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Message Sent!</h3>
            <p className="text-gray-400 text-sm">Thanks for reaching out — I'll get back to you soon.</p>
            <button onClick={() => setStatus("idle")} className="mt-6 px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition text-sm">Send Another</button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:20 }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              <div>
                <label style={{ fontSize:11, color:"#4a6580", letterSpacing:"1.5px", textTransform:"uppercase", fontFamily:"monospace", display:"block", marginBottom:8 }}>Name</label>
                <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused("")} style={getStyle("name")} required />
              </div>
              <div>
                <label style={{ fontSize:11, color:"#4a6580", letterSpacing:"1.5px", textTransform:"uppercase", fontFamily:"monospace", display:"block", marginBottom:8 }}>Email</label>
                <input type="email" name="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused("")} style={getStyle("email")} required />
              </div>
            </div>
            <div>
              <label style={{ fontSize:11, color:"#4a6580", letterSpacing:"1.5px", textTransform:"uppercase", fontFamily:"monospace", display:"block", marginBottom:8 }}>Message</label>
              <textarea name="message" placeholder="Tell me about your project or just say hi..." rows={5} value={formData.message} onChange={handleChange} onFocus={() => setFocused("message")} onBlur={() => setFocused("")} style={{ ...getStyle("message"), resize:"vertical", minHeight:130 }} required />
            </div>
            <motion.button type="submit" whileHover={{ scale:1.02 }} whileTap={{ scale:0.98 }} disabled={status === "sending"}
              style={{ width:"100%", padding:"14px", background: status === "sending" ? "rgba(56,189,248,0.3)" : "linear-gradient(90deg,#22d3ee,#3b82f6)", border:"none", borderRadius:12, color: status === "sending" ? "#a0bdd4" : "#000", fontWeight:600, fontSize:15, cursor: status === "sending" ? "not-allowed" : "pointer", letterSpacing:"0.5px", transition:"all 0.3s", boxShadow: status === "sending" ? "none" : "0 0 20px rgba(56,189,248,0.3)" }}>
              {status === "sending" ? "Opening mail client..." : "Send Message →"}
            </motion.button>
            <div style={{ display:"flex", justifyContent:"center", gap:24, paddingTop:4, flexWrap:"wrap" }}>
              {[
                { href:"mailto:singhabhishek4964@gmail.com", icon:<FaEnvelope />, label:"singhabhishek4964@gmail.com" },
                { href:"https://github.com/Abhishek9885", icon:<FaGithub />, label:"GitHub" },
                { href:"https://www.instagram.com/its_abhishek_singh9885/", icon:<FaInstagram />, label:"Instagram" },
              ].map((l, i) => (
                <a key={i} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  style={{ fontSize:12, color:"#4a6580", display:"flex", alignItems:"center", gap:6, textDecoration:"none", transition:"color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color="#38bdf8"}
                  onMouseLeave={e => e.currentTarget.style.color="#4a6580"}>
                  {l.icon} {l.label}
                </a>
              ))}
            </div>
          </form>
        )}
      </div>
    </motion.section>
  );
}


const DEMO_URLS = {
  "Todo-App-MERN":        "https://todo-app-mern-liart.vercel.app/",
  "first-contributions":  null,   // no live demo
  "ai-hygiene-system":    null,   // add URL when ready
  "cartiq-backend": "https://cartiq-backend.onrender.com/",
  "cartiq-frontend": "https://cartiq-frontend.vercel.app/",
  "Portfolio": "https://abhishek-portfolio-2024.vercel.app/",
};

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [text, setText] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);
  const [active, setActive] = useState("home");

  const cursorRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const roles = [" Full Stack Developer", "CSE Student", "Tech Enthusiast"];

  const certificates = [
    { img: certi1, title: "WEB-A-THON 24 Hackothon" },
    { img: certi2, title: "C++ Certificate" },
    { img: certi3, title: "MongoDB Certificate" },
    { img: certi4, title: "Effective Communication" },
    { img: certi5, title: "C Programming" },
    { img: certi6, title: "Cyber Security" },
    { img: certi7, title: "WEB-A-THON 2.0" }
  ];

  const skills = [
    { name: "HTML",       icon: <FaHtml5 />,                                  glow: "#f97316", level: "Expert",       dots: 5, desc: "Built semantic, accessible pages and multi-section portfolio layouts." },
    { name: "CSS",        icon: <FaCss3Alt />,                                glow: "#38bdf8", level: "Advanced",     dots: 4, desc: "Crafted animations, responsive layouts using Flexbox & Grid." },
    { name: "JavaScript", icon: <SiJavascript />,                             glow: "#facc15", level: "Advanced",     dots: 4, desc: "Built dynamic UIs, form validations & REST API integrations." },
    { name: "React.js",   icon: <FaReact />,                                  glow: "#61dafb", level: "Intermediate", dots: 3, desc: "Developed SPAs with hooks, component architecture & state management." },
    { name: "Node.js",    icon: <FaNodeJs />,                                 glow: "#4ade80", level: "Intermediate", dots: 3, desc: "Built REST APIs and server-side logic for full-stack apps." },
    { name: "Express.js", icon: <SiExpress />,                                glow: "#c0c0c0", level: "Intermediate", dots: 3, desc: "Created routing, middleware & RESTful endpoints for backend services." },
    { name: "MongoDB",    icon: <SiMongodb />,                                glow: "#4db561", level: "Intermediate", dots: 3, desc: "Designed NoSQL schemas & integrated Mongoose with Node.js." },
    { name: "SQL",        icon: <SiMysql />,                                  glow: "#818cf8", level: "Intermediate", dots: 3, desc: "Wrote queries, joins & managed relational databases for CRUD projects." },
    { name: "C++",        icon: <SiCplusplus />,                              glow: "#60a5fa", level: "Advanced",     dots: 4, desc: "Solved competitive programming problems & built OOP-based projects." },
    { name: "C",          icon: <span className="font-bold text-lg">C</span>, glow: "#d1d5db", level: "Beginner",     dots: 2, desc: "Learned pointers, memory management & fundamental algorithms." },
    { name: "DBMS",       icon: <FaDatabase />,                               glow: "#fb923c", level: "Intermediate", dots: 3, desc: "Studied normalization, ER models & transaction management." },
    { name: "DSA",        icon: <FaBrain />,                                  glow: "#a78bfa", level: "Intermediate", dots: 3, desc: "Practiced arrays, trees, graphs & dynamic programming challenges." },
  ];

  useEffect(() => {
    let i = 0, j = 0, current = "", deleting = false;
    const type = () => {
      current = roles[i];
      setText(current.substring(0, j));
      if (!deleting) { j++; if (j === current.length) deleting = true; }
      else { j--; if (j === 0) { deleting = false; i = (i + 1) % roles.length; } }
    };
    const t = setInterval(type, 80);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/Abhishek9885/repos")
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) {
        
          setProjects([
            { name: "Portfolio Website",  description: "Modern animated portfolio",                                                                         html_url: "#",                                             full_name: "Abhishek9885/portfolio",              category: "Frontend",   demo: null },
            { name: "Todo-App-MERN",      description: "To Do app using MERN STACK",                                                                       html_url: "https://github.com/Abhishek9885/Todo-App-MERN", full_name: "Abhishek9885/Todo-App-MERN",          category: "Full Stack", demo: "https://todo-app-mern-liart.vercel.app/" },
            { name: "first-contributions",description: "I have made changes in first contribution",                                                        html_url: "https://github.com/Abhishek9885/first-contributions", full_name: "Abhishek9885/first-contributions", category: "Full Stack", demo: null },
            { name: "ai-hygiene-system",  description: "Full-stack app using Google Gemini AI for skin condition analysis and cleanliness detection.",      html_url: "https://github.com/Abhishek9885/ai-hygiene-system",  full_name: "Abhishek9885/ai-hygiene-system",   category: "Full Stack", demo: null },
            {name: "cartiq-backend",description: "Backend for CartIQ, an intelligent shopping assistant that provides personalized product recommendations and price comparisons.", html_url: "https://github.com/Abhishek9885/cartiq-backend", full_name: "Abhishek9885/cartiq-backend", category: "Full Stack", demo: "https://cartiq-backend.onrender.com/"},
            {name: "cartiq-frontend",description: "Frontend for CartIQ, an intelligent shopping assistant that provides personalized product recommendations and price comparisons.", html_url: "https://github.com/Abhishek9885/cartiq-frontend", full_name: "Abhishek9885/cartiq-frontend", category: "Full Stack", demo: "https://cartiq-frontend.vercel.app/"},
            {name: "Portfolio",description: "Modern animated portfolio", html_url: "https://github.com/Abhishek9885/portfolio", full_name: "Abhishek9885/portfolio", category: "Frontend", demo: "https://abhishek-portfolio-2024.vercel.app/"},

          ]);
          return;
        }
   
        setProjects(
          data.slice(0, 6).map(p => ({
            ...p,
            category: "Full Stack",
            demo: DEMO_URLS[p.name] || null,
          }))
        );
      })
      .catch(err => console.error(err));
  }, []);

  const filteredProjects = projects;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certificates", "contact"];
      sections.forEach(id => {
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

  useEffect(() => {
    const move = (e) => {
      const cursor = cursorRef.current;
      if (!cursor) return;
      cursor.style.left = e.clientX + "px";
      cursor.style.top  = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className={dark ? "bg-slate-950 text-white" : "bg-white text-black"}>

      <style>{`
        @property --sk-angle { syntax:'<angle>'; initial-value:0deg; inherits:false; }
        @keyframes skillSpinBorder { to { --sk-angle: 360deg; } }
        @keyframes skillPulseRing {
          0%   { transform: scale(0.8); opacity: 0.22; }
          70%  { transform: scale(1.75); opacity: 0; }
          100% { transform: scale(1.75); opacity: 0; }
        }
        @keyframes skillOrbFloat {
          0%   { transform: translateY(0px) scale(1); }
          100% { transform: translateY(28px) scale(1.07); }
        }
        @keyframes skillGridDrift {
          0%   { background-position: 0 0, 0 0; }
          100% { background-position: 52px 52px, 52px 52px; }
        }
        #skills::before {
          content:''; position:absolute; inset:0;
          background-image:
            linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px);
          background-size:52px 52px;
          animation:skillGridDrift 18s linear infinite;
          pointer-events:none; z-index:0;
        }
        #skills::after {
          content:''; position:absolute; inset:0;
          background:
            radial-gradient(ellipse 65% 55% at 20% 10%,  rgba(56,189,248,0.07)  0%, transparent 60%),
            radial-gradient(ellipse 55% 50% at 80% 90%,  rgba(129,140,248,0.09) 0%, transparent 60%),
            radial-gradient(ellipse 45% 40% at 55% 50%,  rgba(0,255,157,0.03)   0%, transparent 65%);
          pointer-events:none; z-index:0;
        }
        #skills h2 { text-shadow: 0 0 40px rgba(56,189,248,0.35), 0 0 80px rgba(56,189,248,0.15); }
        #skills    { border-bottom: 1px solid rgba(56,189,248,0.08); }
        input::placeholder, textarea::placeholder { color: #2d4a62; }
        input:-webkit-autofill, textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #0a1628 inset !important;
          -webkit-text-fill-color: #e0eaff !important;
        }
      `}</style>

      <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-50" />
      <div ref={cursorRef} className="fixed w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

    
      <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-xl bg-black/30 sticky top-0 z-40">
        <h1 className="text-xl font-bold">Abhishek</h1>
        <div className="flex gap-6 text-sm">
          {["home","about","skills","projects","certificates","contact"].map(id => (
            <a key={id} href={`#${id}`} className={`${active===id ? "text-cyan-400" : ""} hover:text-cyan-400`}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <button onClick={() => setDark(!dark)}>🌙</button>
      </nav>

  
      <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-between px-10 relative overflow-hidden">
        <div className="absolute left-20 top-40 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full"></div>
        <div className="absolute right-20 bottom-20 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>
        <div className="md:w-1/2 z-10">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Hi I'm <br /> Full-Stack Developer
          </motion.h1>
          <p className="mt-4 text-cyan-400 text-lg">{text}</p>
          <p className="mt-4 text-gray-400 max-w-md">Building modern web applications and solving real-world problems.</p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-6 py-2 bg-cyan-400 text-black rounded-lg hover:scale-105 transition">View Projects</a>
            <a href="#about"    className="px-6 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">About Me</a>
            <a href="/resume.pdf" download="Abhishek_Singh_Resume.pdf"
              className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-lg hover:scale-105 transition shadow-lg hover:shadow-cyan-400/50">
              Download Resume
            </a>
          </div>
        </div>
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
          <img src={profile} className="w-64 rounded-full border-4 border-cyan-400" />
        </motion.div>
      </section>

    
      <motion.section id="about"
        initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="px-10 py-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl mb-6">About Me</h2>
        <p className="text-gray-400 mb-8">
          I am a 2nd-year Computer Science and Engineering student at Lovely Professional University, passionate about coding, problem-solving, and building impactful projects. With strong skills in C, C++, and Data Structures & Algorithms, I actively practice competitive programming and explore real-world applications through projects in Web Development and Electronics.

          I believe in continuous learning and adaptability, which drives me to stay updated with emerging technologies in software engineering, AI, and system design. Beyond academics, I enjoy chess, which sharpens my strategic thinking and decision-making skills.

          I am seeking opportunities to collaborate, learn, and contribute to innovative projects where I can apply my technical knowledge and grow as a developer
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <a href="https://github.com/Abhishek9885" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 rounded-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black transition shadow-md hover:shadow-cyan-400/50"><FaGithub /> GitHub</a>
          <a href="https://leetcode.com/u/Abhishek_9415/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 rounded-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black transition shadow-md hover:shadow-cyan-400/50"><FaLinkedin /> LinkedIn</a>
          <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 rounded-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black transition shadow-md hover:shadow-cyan-400/50"><FaTwitter /> X</a>
          <a href="https://www.instagram.com/its_abhishek_singh9885/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2 rounded-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black transition shadow-md hover:shadow-cyan-400/50"><FaInstagram /> Instagram</a>
          <a href="mailto:singhabhishek4964@gmail.com" className="flex items-center gap-2 px-5 py-2 rounded-lg border border-cyan-400 hover:bg-cyan-400 hover:text-black transition shadow-md hover:shadow-cyan-400/50"><FaEnvelope /> Email</a>
        </div>
      </motion.section>

    
      <section id="skills" className="px-10 py-20 text-center relative overflow-hidden">
        <div style={{ position:"absolute", borderRadius:"50%", filter:"blur(70px)", pointerEvents:"none", zIndex:0, width:280, height:280, top:-70, left:"5%", background:"rgba(56,189,248,0.07)", animation:"skillOrbFloat 11s ease-in-out infinite alternate" }} />
        <div style={{ position:"absolute", borderRadius:"50%", filter:"blur(70px)", pointerEvents:"none", zIndex:0, width:210, height:210, bottom:-50, right:"8%", background:"rgba(129,140,248,0.08)", animation:"skillOrbFloat 9s ease-in-out infinite alternate", animationDelay:"-4s" }} />
        <div style={{ position:"absolute", borderRadius:"50%", filter:"blur(60px)", pointerEvents:"none", zIndex:0, width:160, height:160, top:"40%", left:"50%", transform:"translateX(-50%)", background:"rgba(0,255,157,0.04)", animation:"skillOrbFloat 13s ease-in-out infinite alternate", animationDelay:"-7s" }} />
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", zIndex:0, background:"radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(4,10,22,0.55) 100%)" }} />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[200px] bg-cyan-400/20 blur-3xl"></div>
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-12" style={{ position:"relative", zIndex:1 }}>Skills</motion.h2>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="flex flex-wrap justify-center gap-6" style={{ position:"relative", zIndex:1 }}>
          {skills.map((s, i) => <SkillCard key={i} s={s} />)}
        </motion.div>
      </section>

      <motion.section id="projects" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="px-10 py-20">
        <h2 className="text-4xl text-center mb-10 font-bold">Projects</h2>
        <div className="flex justify-center gap-4 mb-10">
          {["All", "Frontend", "Backend", "Full Stack"].map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg border ${filter === cat ? "bg-cyan-400 text-black" : "border-cyan-400 text-cyan-400"} transition`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {filteredProjects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05 }}
              className="bg-slate-800/60 backdrop-blur-lg p-4 rounded-2xl border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition duration-300">
              <div className="relative overflow-hidden rounded-xl">
                <img src={`https://opengraph.githubassets.com/1/${p.full_name}`} className="w-full h-40 object-cover rounded-xl" />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex gap-3 items-center justify-center">

                 
                  <a href={p.html_url} target="_blank" rel="noopener noreferrer"
                    className="px-3 py-1 bg-cyan-400 text-black rounded font-medium">
                    Code
                  </a>

              
                  {p.demo ? (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer"
                      className="px-3 py-1 bg-white text-black rounded font-medium hover:bg-cyan-400 transition">
                      Live ↗
                    </a>
                  ) : (
                    <span className="px-3 py-1 border border-gray-600 text-gray-500 rounded text-sm cursor-not-allowed">
                      No Demo
                    </span>
                  )}

                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.description || "Project description coming soon..."}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-cyan-400/20 px-2 py-1 rounded">{p.category}</span>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer"
                    className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded hover:bg-green-400/40 transition">
                    Live Demo ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

    
      <section id="certificates" className="px-10 py-16 text-center">
        <h2 className="text-3xl mb-10">Certificates</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((c, i) => (
            <motion.div key={i} whileHover={{ scale: 1.07 }}
              className="bg-slate-800 p-4 rounded-xl shadow-lg hover:shadow-cyan-400/50 transition cursor-pointer"
              onClick={() => setSelectedCert(c)}>
              <img src={c.img} className="rounded-lg mb-3 object-cover h-48 w-full" />
              <p className="font-medium">{c.title}</p>
              <span className="text-cyan-400 text-sm">Click to view</span>
            </motion.div>
          ))}
        </div>
      </section>

   
      <ContactSection />

    
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedCert(null)}>
          <div className="max-w-3xl w-full p-4">
            <img src={selectedCert.img} className="rounded-xl w-full shadow-lg" />
            <p className="text-center mt-4 text-white">{selectedCert.title}</p>
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-slate-900 p-6 rounded-xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={`https://opengraph.githubassets.com/1/${selectedProject.full_name}`} className="rounded-lg mb-4" />
            <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
            <p className="text-gray-400 mt-2">{selectedProject.description || "No description available"}</p>
            <div className="flex gap-4 mt-4">
              <a href={selectedProject.html_url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-400 text-black rounded">View Code</a>
              {selectedProject.demo && (
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-cyan-400 rounded">Live Demo</a>
              )}
            </div>
          </div>
        </div>
      )}

   
      <footer className="text-center py-8 text-gray-500 border-t border-white/5">
        <p className="mb-3">© 2026 Abhishek Singh — Built with  ❤️</p>
        <div className="flex justify-center gap-5">
          <a href="https://github.com/Abhishek9885" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><FaGithub size={18} /></a>
          <a href="https://www.instagram.com/its_abhishek_singh9885/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition"><FaInstagram size={18} /></a>
          <a href="mailto:singhabhishek4964@gmail.com" className="hover:text-cyan-400 transition"><FaEnvelope size={18} /></a>
        </div>
      </footer>

    </div>
  );
}