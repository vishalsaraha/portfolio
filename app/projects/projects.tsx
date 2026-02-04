"use client";

import {
  Card,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin outside the component
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
};

export default function Projectblock({
  title,
  description,
  image,
  link,
  technologies = [],
}: ProjectCardProps) {
  // 1. Create a ref for the entire card
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // 2. Use gsap.context for clean memory management in React
    const ctx = gsap.context(() => {
      
      // The "Pop Up" Animation
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 60,         // Start 60px lower
          scale: 0.9,    // Start slightly smaller
        },
        {
          opacity: 1,
          y: 0,          // Move to original position
          scale: 1,      // Scale to original size
          duration: 0.8,
          ease: "power3.out", // Smooth deceleration
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",    // Animation starts when card top hits 85% of viewport
            toggleActions: "play none none reverse", // Plays forward on enter, reverses on leave
          },
        }
      );
    }, cardRef); // Scope the selectors to this specific card instance

    // 3. Cleanup: This prevents the "refresh/reload" bugs you were seeing
    return () => ctx.revert();
  }, []);

  return (
    
    
    <Card
      ref={cardRef}
      sx={{
        width: 360,
        m: 2,
        border: "2px solid #0066FF",
        borderRadius: 0,
        overflow: "hidden",
        position: "relative",
        opacity: 0, 
        "&:hover .overlay": { opacity: 1 },
        "&:hover img": {
          transform: "scale(1.07)",
        },
      }}
    >
      
      {/* IMAGE CONTAINER */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 300,
          overflow: "hidden",
        }}
      >
        {/* IMAGE */}
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
        />

        {/* TITLE */}
        <Typography
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 3,
            fontFamily: "monospace",
            fontWeight: 800,
            fontSize: "0.95rem",
            color: "#0066FF",
            backgroundColor: "#fff",
            px: 1.5,
            py: 0.6,
            border: "1px solid #0066FF",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>

        {/* OVERLAY */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            opacity: 0,
            transition: "opacity 0.3s ease",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 102, 255, 0.88)",
              zIndex: 0,
            },
          }}
        >
          {/* OVERLAY CONTENT */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              px: 3,
              pb: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "0.75rem",
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              {description}
            </Typography>

            {technologies.length > 0 && (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))",
                  gap: 1,
                  mb: 2,
                }}
              >
                {technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      borderRadius: 0,
                      border: "1px solid #fff",
                      color: "#fff",
                      backgroundColor: "transparent",
                      fontSize: "0.55rem",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                    }}
                  />
                ))}
              </Box>
            )}

            <Button
              href={link}
              target="_blank"
              sx={{
                fontFamily: "monospace",
                color: "#0066FF",
                backgroundColor: "#fff",
                borderRadius: 0,
                px: 2.5,
                py: 0.75,
                fontSize: "0.6rem",
                fontWeight: 800,
                letterSpacing: "0.18em",
                "&:hover": {
                  backgroundColor: "#e6f0ff",
                },
              }}
            >
              VIEW PROJECT →
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}