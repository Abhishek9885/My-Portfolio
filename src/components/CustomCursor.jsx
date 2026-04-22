import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const cursor = cursorRef.current;
      if (!cursor) return;
      
      // Add a slight delay/smoothness via transform instead of raw left/top
      cursor.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`
        }, 
        { duration: 150, fill: "forwards" }
      );
    };
    
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed w-32 h-32 bg-cyan-400/20 blur-3xl rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-screen" 
    />
  );
}
