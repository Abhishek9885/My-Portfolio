import { motion } from "framer-motion";

export function Navbar({ active, dark, setDark }) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-xl bg-slate-950/50 sticky top-0 z-40 border-b border-white/5">
      <h1 className="text-2xl font-display font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
        Abhishek<span className="text-cyan-400">.</span>
      </h1>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        {["home", "about", "skills", "projects", "certificates", "contact"].map((id) => (
          <a 
            key={id} 
            href={`#${id}`} 
            className={`relative py-2 transition-colors duration-300 ${active === id ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
            {active === id && (
              <motion.div 
                layoutId="nav-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              />
            )}
          </a>
        ))}
      </div>
      <button 
        onClick={() => setDark(!dark)}
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Toggle Dark Mode"
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
