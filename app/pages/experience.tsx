"use client";

import { Box, Typography, Grid } from "@mui/material";

const experienceData = [
  {
    step: "01",
    role: "Web Development Intern",
    company: "Dastin Technologies",
    duration: "Oct 2024 – Apr 2025",
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
    /* 🔵 BLUE SECTION */
    <Box
      sx={{
        px: { xs: 2, md: 10 },
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          fontSize: { xs: "2rem", md: "2.8rem" },
          fontWeight: 800,
          mb: 10,
          color: "#fff",
        }}
      >
        Experience
      </Typography>

      {/* TIMELINE */}
      <Box
        sx={{
          mb: 8,
          height: 2,
          backgroundColor: "rgba(255,255,255,0.5)",
        }}
      />

      {/* ⚪ WHITE BACKGROUND STRIP */}
      <Box
        sx={{
          backgroundColor: "#fff",
          px: { xs: 2, md: 6 },
          py: 6,
        }}
      >
        <Grid container spacing={6}>
          {experienceData.map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.step}>
              {/* 🔵 CARD */}
              <Box
                sx={{
                  backgroundColor: "#0066FF",
                  p: 4,
                  height: "100%",
                }}
              >
                {/* STEP */}
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    backgroundColor: "#fff",
                    color: "#0066FF",
                    fontSize: "0.7rem",
                    fontWeight: 800,
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
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    color: "#fff",
                    mb: 0.5,
                  }}
                >
                  {item.role}
                </Typography>

                {/* META */}
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.8)",
                    mb: 2,
                  }}
                >
                  {item.company} · {item.duration}
                </Typography>

                {/* POINTS */}
                {item.points.map((point, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      color: "#fff",
                      mb: 1,
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
