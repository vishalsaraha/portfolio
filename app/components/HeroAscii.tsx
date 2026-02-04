"use client";

import { Box, Typography } from "@mui/material";
import AsciiBackground from "./AsciiBackground";

export default function HeroAscii() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AsciiBackground />

      {/* CONTENT BOX */}
      <Box
        sx={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* NAME */}
        <Typography
          sx={{
            fontFamily: "'Press Start 2P', system-ui",
            fontSize: { xs: "1.8rem", md: "3rem" },
            color: "#ffffff",
            lineHeight: 1.4,
            textTransform: "uppercase",
            mb: 2,
            // Blue shadow and glow
            textShadow: "6px 6px 0px #0066FF",
            filter: "drop-shadow(0px 0px 12px rgba(0, 102, 255, 0.8))",
          }}
        >
          VISHAL MUTHAPPA
        </Typography>

        {/* SUBTITLE */}
        <Typography
          sx={{
            fontFamily: "monospace",
            fontSize: "16px",
            color: "#0066FF",
            backgroundColor: "#ffffff",
            p: 1,
            textTransform: "uppercase",
            border: "1px solid #0066FF",
          }}
        >
          Web developer | cross platform app developer
        </Typography>
      </Box>
    </Box>
  );
}