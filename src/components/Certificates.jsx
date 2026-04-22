import { motion } from "framer-motion";

export function Certificates({ certificates, setSelectedCert }) {
  return (
    <section id="certificates" className="px-10 py-24 text-center bg-slate-900/20 border-y border-white/5">
      <h2 className="text-4xl font-display font-bold mb-16 text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">Certificates</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((c, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group bg-slate-800/80 p-3 rounded-2xl shadow-xl hover:shadow-[0_15px_30px_rgba(34,211,238,0.2)] border border-white/5 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedCert(c)}
          >
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img src={c.img} className="object-cover h-56 w-full rounded-xl group-hover:scale-105 transition-transform duration-500" loading="lazy" alt={c.title} />
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-300" />
            </div>
            <p className="font-semibold text-lg text-white mb-1 group-hover:text-cyan-400 transition-colors">{c.title}</p>
            <span className="text-cyan-400/70 text-sm font-medium tracking-wide">Click to view</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
