import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export function About() {
  return (
    <motion.section 
      id="about"
      initial={{ opacity: 0, y: 60 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }}
      className="px-10 py-24 text-center max-w-4xl mx-auto relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none" />
      
      <h2 className="text-4xl font-display font-bold mb-8 text-white relative z-10">About Me</h2>
      <p className="text-gray-300/90 mb-10 text-lg leading-relaxed relative z-10">
        I am a 2nd-year Computer Science and Engineering student at Lovely Professional University, passionate about coding, problem-solving, and building impactful projects. With strong skills in C, C++, and Data Structures & Algorithms, I actively practice competitive programming and explore real-world applications through projects in Web Development and Electronics.
        <br /><br />
        I believe in continuous learning and adaptability, which drives me to stay updated with emerging technologies in software engineering, AI, and system design. Beyond academics, I enjoy chess, which sharpens my strategic thinking and decision-making skills.
        <br /><br />
        I am seeking opportunities to collaborate, learn, and contribute to innovative projects where I can apply my technical knowledge and grow as a developer.
      </p>

      <div className="flex flex-wrap justify-center gap-5 relative z-10">
        {[
          { icon: <FaGithub />, text: "GitHub", href: "https://github.com/Abhishek9885" },
          { icon: <FaLinkedin />, text: "LinkedIn", href: "https://leetcode.com/u/Abhishek_9415/" },
          { icon: <FaTwitter />, text: "X", href: "https://twitter.com/YOUR_TWITTER" },
          { icon: <FaInstagram />, text: "Instagram", href: "https://www.instagram.com/its_abhishek_singh9885/" },
          { icon: <FaEnvelope />, text: "Email", href: "mailto:singhabhishek4964@gmail.com" }
        ].map((link, idx) => (
          <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" 
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/30 bg-slate-900/50 hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] backdrop-blur-sm font-medium"
          >
            {link.icon} {link.text}
          </a>
        ))}
      </div>
    </motion.section>
  );
}
