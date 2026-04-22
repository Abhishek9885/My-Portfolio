import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export function Projects({ projects, selectedProject, setSelectedProject }) {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, y: 60 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      className="px-10 py-24"
    >
      <h2 className="text-4xl text-center mb-12 font-display font-bold text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">Featured Projects</h2>
      
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {["All", "Frontend", "Backend", "Full Stack"].map((cat) => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-xl border text-sm font-medium transition-all duration-300 ${
              filter === cat 
                ? "bg-cyan-400 text-black border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
                : "border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.1 }} 
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            onClick={() => setSelectedProject(p)}
            className="group cursor-pointer bg-slate-900/60 backdrop-blur-xl p-5 rounded-2xl border border-white/5 shadow-xl hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] hover:border-cyan-400/30 transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative overflow-hidden rounded-xl mb-5">
              <img 
                src={`https://opengraph.githubassets.com/1/${p.full_name}`} 
                className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" 
                alt={p.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{p.name}</h3>
            <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">{p.description || "View details on GitHub."}</p>
            
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs font-semibold bg-cyan-400/10 text-cyan-400 px-3 py-1.5 rounded-full border border-cyan-400/20">
                {p.category}
              </span>
              
              <div className="flex gap-3">
                <a 
                  href={p.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-cyan-400 transition-colors"
                  aria-label="View Source Code"
                >
                  <FiGithub size={18} />
                </a>
                {p.demo && (
                  <a 
                    href={p.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-cyan-400/10 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-colors"
                    aria-label="View Live Demo"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
