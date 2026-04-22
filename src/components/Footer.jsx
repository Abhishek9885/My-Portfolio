import { FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="text-center py-10 bg-slate-950 text-gray-500 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <p className="mb-4 font-medium tracking-wide">© 2026 Abhishek Singh — Built with ❤️ and React</p>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/Abhishek9885" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 hover:scale-110 transition-all duration-300">
          <FaGithub size={20} />
        </a>
        <a href="https://www.instagram.com/its_abhishek_singh9885/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 hover:scale-110 transition-all duration-300">
          <FaInstagram size={20} />
        </a>
        <a href="mailto:singhabhishek4964@gmail.com" className="hover:text-cyan-400 hover:scale-110 transition-all duration-300">
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  );
}
