"use client";

import { Box, Typography, Grid } from "@mui/material";

const experienceData = [
  {
    step: "01",
    role: "Web Development Intern",
    company: "Dastin Technologies",
    duration: "Oct 2024 - Apr 2025",
    points: [
      "Developed responsive UI components using Next.js and MUI",
      "Improved page performance through layout optimization",
      "Built and deployed a full Shopify ecommerce website",
      "Collaborated with designers and backend teams",
    ],
  },
  {
    step: "02",
    role: "Frontend Developer",
    company: "Shopify Projects",
    duration: "Freelance",
    points: [
      "Customized Shopify themes using Liquid and JavaScript",
      "Optimized product pages for better conversions",
      "Deployed production builds using cPanel",
      "Focused on UI consistency and performance",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 6,
      fontFamily: 'monospace', 
    }}>

      
      {/* ⚪ WHITE CONTENT AREA */}
      <Box
        sx={{
          backgroundColor: "#fff",
          px: { xs: 3, md: 8 },
          pt: 4, // Reduced top padding to close the gap
          pb: 8,
          borderRadius: "4px",
  
        }}
      >
        <Grid container spacing={4}>
          {experienceData.map((item) => (
            <Grid size={{ xs: 12, md: 6, lg: 6 }} key={item.step}>
              {/* 🔵 CARD */}
              <Box
                sx={{
                  backgroundColor: "#0066FF",
                  p: 4,
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 10px 20px rgba(0,102,255,0.2)",
                  },
                }}
              >
                {/* STEP INDICATOR */}
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: "#fff",
                    color: "#0066FF",
                    fontSize: "0.75rem",
                    fontWeight: 900,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  {item.step}
                </Box>

                {/* ROLE */}
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "#fff",
                    mb: 0.5,
                  }}
                >
                  {item.role}
                </Typography>

                {/* COMPANY & DATE */}
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.7)",
                    mb: 3,
                    fontStyle: "italic",
                  }}
                >
                  {item.company} | {item.duration}
                </Typography>

                {/* DETAILS */}
                {item.points.map((point, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      color: "#fff",
                      mb: 1.5,
                      display: "flex",
                      alignItems: "flex-start",
                      "&::before": {
                        content: '"•"',
                        marginRight: "12px",
                        color: "rgba(255,255,255,0.5)",
                      },
                    }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}