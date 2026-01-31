"use client";

import { Box, Typography, Button, Paper } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type BentoItemProps = {
  title: string;
  description: string;
  gridArea: string;
  minHeight?: number | string;
};

const BentoCard = ({ title, description, gridArea, minHeight = 200 }: BentoItemProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        gridArea: gridArea,
        border: "2px solid #0066FF",
        borderRadius: 0,
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: minHeight,
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        backgroundColor: "#fff",
        "&:hover": {
          backgroundColor: "#0066FF",
          borderColor: "#0066FF",
          "& .MuiTypography-root": { color: "#fff" },
          "& .btn-icon": { color: "#fff" },
          "& .view-btn": { 
            color: "#fff", 
            borderColor: "#fff" 
          }
        },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: "#0066FF",
            textTransform: "uppercase",
            mb: 1,
            transition: "color 0.3s ease"
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "monospace",
            fontSize: "0.85rem",
            color: "#333",
            lineHeight: 1.6,
            transition: "color 0.3s ease"
          }}
        >
          {description}
        </Typography>
      </Box>

      <Button
        className="view-btn"
        variant="outlined"
        endIcon={<ArrowForwardIcon className="btn-icon" />}
        sx={{
          alignSelf: "flex-start",
          borderRadius: 0,
          borderColor: "#0066FF",
          color: "#0066FF",
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: "0.7rem",
          mt: 2,
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.2)",
            borderColor: "#fff",
          }
        }}
      >
        VIEW_DETAIL
      </Button>
    </Paper>
  );
};

export default function BentoLayout() {
  return (
    <Box
      sx={{
        p: 4,
        display: "grid",
        gap: 2,
        maxWidth: "100%",
        mx: "auto",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "auto",
        // 'side2' now spans all three rows on the far right
        gridTemplateAreas: `
          "feat feat side1 side2"
          "feat feat side1 side2"
          "bot1 bot2 bot3 side2"
        `,
        "@media (max-width: 900px)": {
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateAreas: `
            "feat feat"
            "side1 side2"
            "bot1 side2"
            "bot2 side2"
            "bot3 bot3"
          `,
        },
        "@media (max-width: 600px)": {
          gridTemplateColumns: "1fr",
          gridTemplateAreas: "none",
          display: "flex",
          flexDirection: "column"
        }
      }}
    >
      <BentoCard 
        gridArea="feat" 
        title="Featured Project" 
        description="PNG National Examination Results website: Leveraged Next.js, MUI, and Bootstrap to improve site performance and enhance user experience across devices." 
      />
      
      <BentoCard 
        gridArea="side1" 
        title="Tech Stack" 
        description="Expertise in Next.js, Material UI, JavaScript, Node.js, and UI/UX Designing to craft seamless digital experiences[cite: 2, 16, 21, 22]." 
      />

      <BentoCard 
        gridArea="side2" 
        title="Education" 
        description="Master of Computer Application from Madurai Kamaraj University (2021-2023) and B.Sc in IT & Management[cite: 29, 30, 31, 33]." 
      />

      <BentoCard 
        gridArea="bot1" 
        title="E-Commerce" 
        description="Developed and launched Nammoringa.in using Shopify, handling design, customization, and deployment[cite: 14]." 
      />
      
      <BentoCard 
        gridArea="bot2" 
        title="Experience" 
        description="Web Development Intern at Dastin Technologies, focusing on modern front-end frameworks and responsive web applications[cite: 10, 12, 15]." 
      />

      <BentoCard 
        gridArea="bot3" 
        title="Projects" 
        description="Restaurants Order Management System built with Node.js, Express.js, and MySQL[cite: 37, 38]." 
      />
    </Box>
  );
}