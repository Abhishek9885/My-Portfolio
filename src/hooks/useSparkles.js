import { useEffect, useRef } from "react";

export function useSparkles(canvasRef, glow, active) {
  const particles = useRef([]);
  const rafRef = useRef(null);
  const ivRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    const resize = () => {
      const r = canvas.parentElement?.getBoundingClientRect();
      canvas.width = r?.width || 180;
      canvas.height = r?.height || 120;
    };
    resize();

    const spawn = () => {
      for (let i = 0; i < 5; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2.2 + 0.8,
          dx: (Math.random() - 0.5) * 1.1,
          dy: (Math.random() - 0.5) * 1.1 - 0.3,
          life: 1,
          decay: Math.random() * 0.018 + 0.012,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => p.life > 0);
      for (const p of particles.current) {
        ctx.save();
        ctx.globalAlpha = p.life * 0.9;
        ctx.fillStyle = glow;
        ctx.shadowColor = glow;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        p.x += p.dx;
        p.y += p.dy;
        p.life -= p.decay;
      }
    };

    if (active) {
      resize();
      ivRef.current = setInterval(spawn, 180);
      const loop = () => {
        draw();
        rafRef.current = requestAnimationFrame(loop);
      };
      loop();
    } else {
      clearInterval(ivRef.current);
      cancelAnimationFrame(rafRef.current);
      particles.current = [];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    return () => {
      clearInterval(ivRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [active, glow, canvasRef]);
}
