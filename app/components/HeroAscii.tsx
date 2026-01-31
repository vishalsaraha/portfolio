"use client";

import { Box, Typography, Button } from "@mui/material";
import AsciiBackground from "./AsciiBackground";
import Image from "next/image";

export default function HeroAscii() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",         
        minHeight: 400,      
        overflow: "hidden",
        background: "#ffffff",
         
      }}
    >
      {/* ASCII BACKGROUND */}
      <AsciiBackground />

      {/* CONTENT */}
      <Box
        sx={{
           
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",   
            textAlign: "center",    
            px: { xs: 3, md: 6 },
            color: "#0b0e12",
        }}
      >
        <Box
                sx={{
                    position: "relative",
                    width: 500,
                    height: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    // GLOW
                    "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: "-12%",
                    background: "#0066FF",
                    opacity: 0.35,
                    borderRadius: "50%",
                    },
                }}
                >
                <Image
                    src="/images/home.png"
                    alt="Web developer's name with some effect"
                     draggable={false}
                    width={500}
                    height={500}
                    style={{ position: "relative", zIndex: 1,
                     }}
                />
                
                </Box>
                <Typography
                  sx={{ 
                      fontFamily: 'monospace', 
                      fontSize: '16px', 
                      color: '#0066FF', 
                      backgroundColor: '#f0f4ff',
                      p: 1,
                      textTransform: 'uppercase',
                    }}
                  >
                  Web developer | cross platform app developer
                  </Typography>
                    
      
      </Box>
    </Box>
  );
}
