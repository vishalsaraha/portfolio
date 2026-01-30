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
        // PARENT HOVER LOGIC
        "&:hover": {
          backgroundColor: "#0066FF",
          borderColor: "#0066FF",
          // This targets every Typography and the Button inside on hover
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
            color: "#0066FF", // Default Blue
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
            color: "#333", // Default Dark Grey
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
        // minHeight: "100vh",
        mx: "auto",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "auto",
        gridTemplateAreas: `
          "feat feat side1 side2"
          "feat feat side1 side3"
          "bot1 bot2 bot3 side3"
        `,
        "@media (max-width: 900px)": {
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateAreas: `
            "feat feat"
            "side1 side2"
            "side1 side3"
            "bot1 bot2"
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
        description="This large block acts as the anchor for your grid. It spans two columns and two rows, making it perfect for your most important work." 
      />
      
      <BentoCard 
        gridArea="side1" 
        title="Services" 
        description="A tall vertical block for listing your technical capabilities." 
      />

      <BentoCard 
        gridArea="side2" 
        title="Contact" 
        description="Quick links to get in touch." 
      />

      <BentoCard 
        gridArea="side3" 
        title="Experience" 
        description="A list of companies or years in the industry." 
      />

      <BentoCard 
        gridArea="bot1" 
        title="Web3" 
        description="Blockchain dev." 
      />

      <BentoCard 
        gridArea="bot2" 
        title="AI/ML" 
        description="Smart systems." 
      />

      <BentoCard 
        gridArea="bot3" 
        title="DevOps" 
        description="CI/CD pipelines." 
      />
    </Box>
  );
}