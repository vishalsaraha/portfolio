"use client";

import { Box, Typography, Button, Paper } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

type BentoItemProps = {
  title: string;
  description: string;
  description2?: string; 
  gridArea: string;
  minHeight?: number | string;
  downloadHref?: string; 
  fileName?: string;    
};

const BentoCard = ({ 
  title, 
  description, 
  description2, 
  gridArea, 
  minHeight = 200, 
  downloadHref, 
  fileName 
}: BentoItemProps) => {
  const isDownload = Boolean(downloadHref);

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
          },
          "& .divider": { borderColor: "rgba(255,255,255,0.3)" }
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

        {/* First Description */}
        <Typography
          sx={{
            fontFamily: "monospace",
            fontSize: "0.85rem",
            color: "#333",
            lineHeight: 1.6,
            transition: "color 0.3s ease",
            whiteSpace: "pre-line" // Important for \n breaks
          }}
        >
          {description}
        </Typography>

        {/* Second Description (renders if provided) */}
        {description2 && (
          <Box 
            className="divider"
            sx={{ 
              mt: 2, 
              pt: 2, 
              borderTop: "1px dashed rgba(0, 102, 255, 0.3)",
              transition: "border-color 0.3s ease" 
            }}
          >
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "0.85rem",
                color: "#333",
                lineHeight: 1.6,
                transition: "color 0.3s ease",
                whiteSpace: "pre-line"
              }}
            >
              {description2}
            </Typography>
          </Box>
        )}
      </Box>

      <Button
        component={isDownload ? "a" : "button"}
        href={downloadHref}
        download={fileName}
        className="view-btn"
        variant="outlined"
        endIcon={isDownload ? <FileDownloadIcon className="btn-icon" /> : <ArrowForwardIcon className="btn-icon" />}
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
        {isDownload ? "DOWNLOAD" : "VIEW_DETAIL"}
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
        description={`Master of Computer Application (MCA)\nMadurai Kamaraj University\n2021 - 2023`} 
        description2={`Bachelor of Science (B.Sc) in IT & Management\nArul Anandar College\n2018 - 2021`}
      />

      <BentoCard 
        gridArea="bot1" 
        title="Download My Resume" 
        downloadHref="/docs/Vishal_Resue.pdf" 
        fileName="Vishal_Muthappa_Resume.pdf"
        description="As a front-end developer and MCA graduate, I specialize in building high-performance applications using Next.js, MUI, and Shopify. Please download my resume to see my full professional history." 
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