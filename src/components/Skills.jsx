import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";

export function Skills({ skills }) {
  // Split skills into two rows for the marquee effect
  const midIndex = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, midIndex);
  const row2 = skills.slice(midIndex);

  return (
    <section id="skills" className="py-24 relative overflow-hidden border-b border-white/5 bg-[#030712]">
      {/* Background Orbs */}
      <div style={{ position: "absolute", borderRadius: "50%", filter: "blur(70px)", pointerEvents: "none", zIndex: 0, width: 280, height: 280, top: -70, left: "5%", background: "rgba(56,189,248,0.07)", animation: "skillOrbFloat 11s ease-in-out infinite alternate" }} />
      <div style={{ position: "absolute", borderRadius: "50%", filter: "blur(70px)", pointerEvents: "none", zIndex: 0, width: 210, height: 210, bottom: -50, right: "8%", background: "rgba(129,140,248,0.08)", animation: "skillOrbFloat 9s ease-in-out infinite alternate", animationDelay: "-4s" }} />
      
      <div className="text-center px-10 mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-4xl font-display font-bold text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]"
        >
          Technical Skills
        </motion.h2>
      </div>
      
      <div className="relative z-10 max-w-full overflow-hidden flex flex-col gap-8 pb-10">
        
        {/* Row 1 - Scrolling Left */}
        <div className="flex w-max animate-marquee-left pause-on-hover hover:z-50 relative">
          {/* We duplicate the array to create the infinite seamless loop */}
          {[...row1, ...row1, ...row1].map((s, i) => (
            <div key={`row1-${i}`} className="mx-4 flex-shrink-0">
              <SkillCard s={s} />
            </div>
          ))}
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="flex w-max animate-marquee-right pause-on-hover hover:z-50 relative" style={{ marginLeft: "-10%" }}>
          {[...row2, ...row2, ...row2].map((s, i) => (
            <div key={`row2-${i}`} className="mx-4 flex-shrink-0">
              <SkillCard s={s} />
            </div>
          ))}
        </div>

        {/* Edge Fade Gradients to make the marquee look seamless */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030712] to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030712] to-transparent pointer-events-none z-20" />
        
      </div>
    </section>
  );
}
