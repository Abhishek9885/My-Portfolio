import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Stars, TorusKnot } from "@react-three/drei";
import profile from "../assets/your-image.jpg"; // make sure path is correct

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 42 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 4]} intensity={18} color="#38bdf8" />
      <pointLight position={[-3, -2, 2]} intensity={10} color="#818cf8" />
      <Stars radius={5} depth={4} count={70} factor={1.5} saturation={0} fade speed={0.35} />
      <Float speed={1.4} rotationIntensity={0.7} floatIntensity={0.8}>
        <TorusKnot args={[1.15, 0.035, 128, 16]} rotation={[0.4, 0.2, 0]}>
          <meshStandardMaterial color="#38bdf8" emissive="#0e7490" emissiveIntensity={1.8} metalness={0.8} roughness={0.2} wireframe />
        </TorusKnot>
      </Float>
    </Canvas>
  );
}

export function Hero({ text }) {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-between px-10 relative overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute left-20 top-40 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full"></motion.div>
      <motion.div style={{ y: yBg }} className="absolute right-20 bottom-20 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></motion.div>
      
      <div className="md:w-1/2 z-10">
        <motion.p
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-3 border border-cyan-300/20 bg-slate-900/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          Abhishek Singh / Software Engineer
        </motion.p>
        <motion.h1 
          style={{ y: yText }}
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text font-display tracking-tight leading-tight"
        >
          Hi I'm <br /> Full-Stack Developer
        </motion.h1>
        <motion.p style={{ y: yText }} className="mt-4 text-cyan-400 text-xl font-medium tracking-wide">{text}</motion.p>
        <motion.p style={{ y: yText }} className="mt-4 text-gray-400 max-w-md text-lg leading-relaxed">
          Building modern web applications and solving real-world problems.
        </motion.p>
        
        <motion.div style={{ y: yText }} className="mt-8 flex gap-4">
          <a href="#projects" className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-xl hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
            View Projects
          </a>
          <a href="#about" className="px-8 py-3 border border-cyan-400/50 rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
            About Me
          </a>
          <a href="/ABhishk_Singh_General_CV.pdf" download="ABhishk_Singh_General_CV.pdf"
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-xl hover:scale-105 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div 
        style={{ y: yBg }}
        animate={{ y: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative z-10 w-80 h-80 md:w-[30rem] md:h-[30rem] flex items-center justify-center"
      >
        <div className="absolute inset-0 opacity-80" aria-hidden="true">
          <HeroScene />
        </div>
        <div className="absolute inset-12 bg-cyan-400/20 blur-[90px] opacity-70" aria-hidden="true" />
        <div className="relative z-10 p-2 bg-slate-950/70 border border-cyan-300/40 shadow-[0_0_50px_rgba(34,211,238,0.3)] backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]">
          <span className="absolute -top-3 left-5 bg-slate-950 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-cyan-300">01 / Profile</span>
          <img src={profile} className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-none border border-cyan-200/70" alt="Abhishek Singh" />
          <span className="absolute -bottom-3 right-5 border border-cyan-300/30 bg-slate-950/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-300">Building in public</span>
        </div>
      </motion.div>
    </section>
  );
}
