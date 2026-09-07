import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const MotionArticle = motion.article;

export function Achievements({ achievements }) {
  return (
    <section id="achievements" className="px-10 py-24 text-center border-b border-white/5">
      <h2 className="text-4xl font-display font-bold mb-16 text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
        Achievements
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {achievements.map((achievement, index) => (
          <a
            key={achievement.title}
            href={achievement.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label={`View ${achievement.platform} profile`}
          >
            <MotionArticle
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-800/70 p-8 text-left shadow-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_15px_35px_rgba(34,211,238,0.16)]"
            >
            <div className="absolute -right-8 -top-8 text-cyan-400/5 transition-transform duration-500 group-hover:scale-110">
              <FaTrophy size={180} />
            </div>
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  <SiLeetcode size={20} />
                  {achievement.platform}
                </span>
                <h3 className="text-3xl font-display font-bold text-white">{achievement.title}</h3>
                <p className="mt-3 max-w-xl text-gray-400">{achievement.description}</p>
              </div>
              <div className="shrink-0 text-5xl font-display font-bold text-cyan-400 drop-shadow-[0_0_16px_rgba(34,211,238,0.4)]">
                {achievement.count}
              </div>
            </div>
            </MotionArticle>
          </a>
        ))}
      </div>
    </section>
  );
}