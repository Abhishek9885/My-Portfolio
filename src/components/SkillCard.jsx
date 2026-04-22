import { useState, useRef } from "react";
import { useSparkles } from "../hooks/useSparkles";

export function SkillCard({ s }) {
  const [hovered, setHovered] = useState(false);
  const canvasRef = useRef(null);
  useSparkles(canvasRef, s.glow, hovered);

  return (
    <div
      style={{ perspective: "900px", height: "110px", minWidth: "170px", position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated Glowing Border Container */}
      <div style={{
        position: "absolute", inset: "-2px", borderRadius: "1rem",
        background: `conic-gradient(from var(--sk-angle,0deg), transparent 0deg, ${s.glow} 60deg, transparent 120deg)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s",
        animation: hovered ? "skillSpinBorder 2s linear infinite" : "none", zIndex: 0,
      }} />
      
      {/* Dark background to hide inner glow edge */}
      <div style={{ position: "absolute", inset: "2px", borderRadius: "1rem", background: "#060e1c", zIndex: 0 }} />
      
      <div style={{
        position: "relative", width: "100%", height: "100%",
        transformStyle: "preserve-3d",
        transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)", zIndex: 1,
      }}>
        
        {/* FRONT OF CARD */}
        <div 
          style={{ 
            backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", position: "absolute", inset: 0,
            borderRadius: "1rem", 
            border: `1px solid ${s.glow}33`,
            background: "linear-gradient(145deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))",
            boxShadow: `0 0 15px ${s.glow}11`,
            display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"
          }}
          className="backdrop-blur-xl transition duration-300"
        >
          <span className="text-2xl" style={{ color: s.glow, filter: `drop-shadow(0 0 8px ${s.glow}88)` }}>{s.icon}</span>
          <span className="font-semibold tracking-wide text-gray-200">{s.name}</span>
        </div>
        
        {/* BACK OF CARD */}
        <div style={{
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
          position: "absolute", inset: 0, transform: "rotateY(180deg)",
          borderRadius: "1rem", border: `1px solid ${s.glow}55`,
          background: "linear-gradient(145deg,#0c1a2e,#091528)",
          boxShadow: `0 0 22px ${s.glow}22`,
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "12px 14px", gap: "8px", overflow: "hidden",
        }}>
          <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", borderRadius: "1rem" }} />
          
          <div style={{ position: "absolute", top: 10, right: 12, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: s.glow, opacity: 0.15, animation: "skillPulseRing 1.8s ease-out infinite" }} />
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: s.glow, opacity: 0.08, animation: "skillPulseRing 1.8s 0.6s ease-out infinite" }} />
            <span style={{ fontSize: 13, position: "relative", zIndex: 1, color: s.glow, display: "flex", alignItems: "center" }}>{s.icon}</span>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
            <span style={{ fontFamily: "monospace", fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: s.glow, fontWeight: 500 }}>{s.level}</span>
            <div style={{ display: "flex", gap: 3 }}>
              {Array.from({ length: 5 }, (_, di) => (
                <div key={di} style={{ width: 6, height: 6, borderRadius: "50%", background: di < s.dots ? s.glow : "rgba(255,255,255,0.1)", boxShadow: di < s.dots ? `0 0 5px ${s.glow}` : "none" }} />
              ))}
            </div>
          </div>
          
          <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.07)", position: "relative", zIndex: 1 }} />
          <p style={{ fontSize: 10.5, color: "#a0bdd4", lineHeight: 1.55, fontWeight: 300, position: "relative", zIndex: 1 }}>{s.desc}</p>
        </div>
        
      </div>
    </div>
  );
}
