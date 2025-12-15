"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ASCII_CHARS = " .:1#%@";

export default function AsciiArt() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ascii, setAscii] = useState("");
  const frameRef = useRef(0);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/girl.jpg";
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;

      const width = 120;
      const height = Math.floor((img.height / img.width) * width * 0.55);

      canvas.width = width;
      canvas.height = height;

      const render = () => {
        frameRef.current += 1;

        ctx.drawImage(img, 0, 0, width, height);
        const imageData = ctx.getImageData(0, 0, width, height).data;

        let asciiStr = "";

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const r = imageData[idx];
            const g = imageData[idx + 1];
            const b = imageData[idx + 2];

            // top → bottom wave animation (slow)
            const wave =
              Math.sin(frameRef.current * 0.03 + y * 0.25) * 10;

            const brightness = (r + g + b) / 3 + wave;

            // clamp to avoid undefined characters
            const clamped = Math.max(0, Math.min(255, brightness));

            const charIndex = Math.floor(
              (clamped / 255) * (ASCII_CHARS.length - 1)
            );

            asciiStr += ASCII_CHARS[charIndex];
          }
          asciiStr += "\n";
        }

        setAscii(asciiStr);

        // slow down animation
        setTimeout(() => {
          requestAnimationFrame(render);
        }, 50);
      };

      render();
    };
  }, []);

  return (
    <Box
      sx={{
          backgroundColor: "#F8FAFF",
        color: "#0066FF",
        overflow: "hidden",
        
      }}
    >
      
      <Typography sx={{ mt: 2, opacity: 0.6, letterSpacing: 2,  fontSize: "10px", p: 1,}}>
        GIRL WITH A PEARL EARRING — BY Johannes Vermeer 
      </Typography>
       <Typography sx={{ mt: 2, opacity: 0.6, fontSize: "10px", paddingLeft: 1,}}>
          ASCII ART BY VM
      </Typography>

      <pre
        style={{
          fontSize: "7px",
          lineHeight: "6px",
          margin: 0,
          whiteSpace: "pre",
          userSelect: "none",
        }}
      >
        {ascii}
      </pre>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </Box>
  );
}
