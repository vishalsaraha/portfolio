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
        description="Developed the PNG National Exam Result website using Next.js, Material-UI, and Bootstrap. I ensured a responsive and user-friendly interface to enhance site performance and user experience across devices." 
      />
      
      <BentoCard 
        gridArea="side1" 
        title="Technical Skills" 
        description="Core expertise in Next.js, Material UI, JavaScript, Node.js, and Express.js. Skilled in UI/UX designing, Shopify development, and database management with MySQL." 
      />

      <BentoCard 
        gridArea="side2" 
        title="Education" 
        description="Master of Computer Application (MCA)
          Madurai Kamaraj University
          2021 - 2023
          Bachelor of Science (B.Sc) in IT and Management
          Arul Anandar College
          2018 - 2021 

          Specialized in crafting digital experiences through a deep understanding of computer applications and management."/>



      <BentoCard 
        gridArea="bot1" 
        title="E-Commerce" 
        description="Built and launched the Shopify-based eCommerce website, Nammoringa.in. Managed the complete design, customization, and deployment process to ensure a high-performing store." 
      />
      
      <BentoCard 
        gridArea="bot2" 
        title="Work Experience" 
        description="Web Development Intern at Dastin Technologies (10/2024-04/2025). Gained hands-on experience in front-end development using modern frameworks to create seamless digital experiences." 
      />

      <BentoCard 
        gridArea="bot3" 
        title="Full Stack Project" 
        description="Developed a Restaurants Order Management System featuring a customer food order page, a kitchen display admin dashboard, and automated billing with invoice printing." 
      />
    </Box>
  );
}