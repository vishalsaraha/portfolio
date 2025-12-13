"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

// ASCII Art lines
const lines = [
  "          ***                  ***                          *********                 ***           ",
  "       *######*             #*####**                      *############             *#####*         ",
  "      #########**          *####*###*                   **###########*#**         ***#####***       ",
  "    *#############      **############*        *####*    *#######*########*     *#####*#######*     ",
  "  **#**#**  *********   ******  +***#***      ******      **#***   ********    ****#*- ***###***    ",
  "  #######*   ########   #####*    *###       *#####       ######    *######*   ######*   *####=     ",
  "  #######*   *######*   ######              *#####        ######    *######*   *#####*              ",
  "  *#######   ########   #####*              ######        ######    +######*   ######*              ",
  "  #*#*##**   ##**##*+   *##***            **##########    ##**#*     *##*#*    *####**              ",
  "  *#################*   #####*           ############     ######    *######+   ######*              ",
  "  *#################*   *####*          =##########*      ######    *######+   ######*              ",
  "  ###################   #####*               *####*       ######    *######*   ######*              ",
  "  #*#**##*   **######   *#**#*     #*       *##**#        *####*    *###*#**   *#####*    ***       ",
  "  ########   #######*   ######    ####     +#####         ######    *######*   #######   #####      ",
  "  *###*##*   #######*   *#####* ########   *###*          ######  #########    *#######*#######**   ",
  " *####*###   ###*####*   ***#########**   *##*          *#*##############**      **##########**     ",
  "  *######*   *##*###**     *########*    *##*            *##############*         **########*       ",
  "   +*#*#*      **#**         *####*     +##*              *##########*#             **####*         ",
];

// Typewriter component
type TypewriterProps = {
  fontSize?: { xs: number; sm?: number; md?: number };
};

export default function Typewriter({ fontSize }: TypewriterProps) {
  const [displayed, setDisplayed] = useState<string[]>([""]);
  const lineIndex = useRef(0);
  const charIndex = useRef(0);
  const [isTyping, setIsTyping] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load typewriter sound once
  useEffect(() => {
    audioRef.current = new Audio("/sounds/typewriter-return1.mp3");
  }, []);

  useEffect(() => {
    const type = () => {
      if (lineIndex.current >= lines.length) {
        setIsTyping(false);
        return;
      }

      const currentLine = lines[lineIndex.current];
      if (charIndex.current < currentLine.length) {
        setDisplayed((prev) => {
          const copy = [...prev];
          copy[lineIndex.current] =
            (copy[lineIndex.current] || "") + currentLine[charIndex.current];
          return copy;
        });

        charIndex.current++;
        audioRef.current?.play().catch(() => {});
        setTimeout(type, 50 + Math.random() * 100); // human-like typing
      } else if (lineIndex.current < lines.length - 1) {
        lineIndex.current++;
        charIndex.current = 0;
        setDisplayed((prev) => [...prev, ""]);
        setTimeout(type, 100);
      }
    };

    type();
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      {displayed.map((line, i) => (
        <Typography
          key={i}
          sx={{
            fontFamily: `"Courier New", monospace`,
            fontSize: fontSize || { xs: 4, sm: 6, md: 8 }, // default small font
            letterSpacing: "0.5px",
            color: "#111",
            whiteSpace: "pre",
            textShadow: "0 0.5px 0 rgba(0,0,0,0.25)",
          }}
        >
          {line}
          
        </Typography>
      ))}
    </Box>
  );
}

// Full component with typewriter image
export function TypewriterOnImage() {
  return (
    <Box sx={{ position: "relative", width: 600, height: 600, mx: "auto" }}>
      {/* Background Image */}
      <Image
        src="/images/typewriter.png"
        alt="Typewriter"
        width={600}
        height={600}
        draggable={false}
        style={{ display: "block", objectFit: "contain" }}
      />

      {/* Overlay Typewriter Text */}
      <Box
        sx={{
          position: "absolute",
          top: "20%", // vertical position of text
          left: "10%", // horizontal center
          transform: "translate(-50%, -50%)",
          width: "18%", // small container inside paper
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <Typewriter fontSize={{ xs: 4, sm: 6, md: 8 }} />
      </Box>
    </Box>
  );
}
