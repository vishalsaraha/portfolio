"use client";

import { useEffect, useRef } from "react";

export default function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const chars = ["0", "1", ".", ":"];
    const stepX = 10;
    const stepY = 14;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // BLUE ASCII
      ctx.fillStyle = "rgba(0, 102, 255, 0.50)"; // #0066FF
      ctx.font = "14px monospace";

      const cx = canvas.width * 0.65;
      const cy = canvas.height * 0.5;
      const radius = canvas.width * 0.35;

      for (let y = 0; y < canvas.height; y += stepY) {
        for (let x = 0; x < canvas.width; x += stepX) {
          const dx = x - cx;
          const dy = y - cy;
          if (Math.sqrt(dx * dx + dy * dy) < radius) continue;

          const char = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(char, x, y);
        }
      }
    }

    resize();
    window.addEventListener("resize", resize);

    const interval = setInterval(draw, 1800);
    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(interval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
