import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profile from "../assets/your-image.jpg"; // make sure path is correct

export function Hero({ text }) {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-between px-10 relative overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute left-20 top-40 w-80 h-80 bg-cyan-400/20 blur-3xl rounded-full"></motion.div>
      <motion.div style={{ y: yBg }} className="absolute right-20 bottom-20 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></motion.div>
      
      <div className="md:w-1/2 z-10">
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
          <a href="/Abhishek_Singh_Resume.pdf" download="Abhishek_Singh_Resume.pdf"
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-xl hover:scale-105 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300">
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.div 
        style={{ y: yBg }}
        animate={{ y: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="absolute inset-0 bg-cyan-400 blur-[100px] opacity-30 rounded-full" />
        <img src={profile} className="w-72 relative z-10 rounded-full border-[6px] border-cyan-400/80 shadow-[0_0_40px_rgba(34,211,238,0.5)]" alt="Abhishek Singh" />
      </motion.div>
    </section>
  );
}
