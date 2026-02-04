"use client";

import { Box, Typography } from "@mui/material";
import AsciiBackground from "./AsciiBackground";

export default function HeroSmall() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AsciiBackground />

      <Box
        sx={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          // Add horizontal padding so text doesn't touch screen edges on mobile
          px: 2, 
          width: "100%",
        }}
      >
        {/* NAME */}
        <Typography
          sx={{
            fontFamily: "'Press Start 2P', system-ui",
            // Scaled down for mobile (1.2rem) up to desktop (3rem)
            fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
            color: "#ffffff",
            lineHeight: 1.6,
            textTransform: "uppercase",
            mb: 2,
            // Smaller shadow for mobile so it doesn't look messy
            textShadow: {
              xs: "3px 3px 0px #0066FF",
              md: "6px 6px 0px #0066FF",
            },
            filter: "drop-shadow(0px 0px 12px rgba(0, 102, 255, 0.8))",
            // Keeps the name together or breaks cleanly
            wordBreak: "keep-all", 
          }}
        >
          {/* Using a Span with break-only-on-mobile logic if needed */}
          VISHAL MUTHAPPA
        </Typography>

        {/* SUBTITLE */}
        <Typography
          sx={{
            fontFamily: "monospace",
            // Smaller text on mobile to ensure it stays on 1-2 lines maximum
            fontSize: { xs: "10px", sm: "14px", md: "16px" },
            color: "#0066FF",
            backgroundColor: "#ffffff",
            p: { xs: 0.5, md: 1 },
            textTransform: "uppercase",
            border: "1px solid #0066FF",
            maxWidth: "100%",
            // Prevents the border/box from looking weird if it wraps
            display: "inline-block", 
          }}
        >
          Web developer | cross platform app developer
        </Typography>
      </Box>
    </Box>
  );
}