"use client";

import { Box, Typography, Button } from "@mui/material";
import AsciiBackground from "./AsciiBackground";

export default function HeroAscii() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",         
        minHeight: 500,      
        overflow: "hidden",
        background: "#ffffff",
         
      }}
    >
      {/* ASCII BACKGROUND */}
      <AsciiBackground />

      {/* CONTENT */}
      <Box
        sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",   // ✅ center horizontally
            textAlign: "center",    // ✅ center text
            px: { xs: 3, md: 6 },
            color: "#0b0e12",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            maxWidth: 420,
            lineHeight: 1.15,
            mb: 2,
            mt: 2,
           
          }}
        >
          VISHAL MUTHAPPA
        </Typography>

        <Typography
          sx={{
            maxWidth: 420,
            opacity: 0.75,
            mb: 3,
            fontSize: 14,
          }}
        >
         
        </Typography>

        {/* <Button
          variant="contained"
          sx={{
            width: "fit-content",
            borderRadius: "999px",
            px: 3,
            py: 1.2,
            fontWeight: 600,
            background: "#0066FF",
            "&:hover": {
              background: "#0052cc",
            },
          }}
        >
          Book a consultation
        </Button> */}
      </Box>
    </Box>
  );
}
