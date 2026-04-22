import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";

export function Skills({ skills }) {
  return (
    <section id="skills" className="px-10 py-24 text-center relative overflow-hidden border-b border-white/5">
      {/* Background Orbs */}
      <div style={{ position: "absolute", borderRadius: "50%", filter: "blur(70px)", pointerEvents: "none", zIndex: 0, width: 280, height: 280, top: -70, left: "5%", background: "rgba(56,189,248,0.07)", animation: "skillOrbFloat 11s ease-in-out infinite alternate" }} />
      <div style={{ position: "absolute", borderRadius: "50%", filter: "blur(70px)", pointerEvents: "none", zIndex: 0, width: 210, height: 210, bottom: -50, right: "8%", background: "rgba(129,140,248,0.08)", animation: "skillOrbFloat 9s ease-in-out infinite alternate", animationDelay: "-4s" }} />
      
      <motion.h2 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="text-4xl font-display font-bold mb-16 text-white relative z-10 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]"
      >
        Technical Skills
      </motion.h2>
      
      <motion.div 
        animate={{ y: [0, -5, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
        className="flex flex-wrap justify-center gap-6 relative z-10 max-w-6xl mx-auto"
      >
        {skills.map((s, i) => <SkillCard key={i} s={s} />)}
      </motion.div>
    </section>
  );
}
