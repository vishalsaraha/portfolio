"use client";

import {
  Card,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";

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
  return (
    <Card
      sx={{
        width: 360,
        m: 2,
        border: "2px solid #0066FF",
        borderRadius: 0,
        overflow: "hidden",
        "&:hover .overlay": { opacity: 1 },
      }}
    >
      <Box sx={{ position: "relative", height: "100%",objectFit: "cover" }}>
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

              /* background only */
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 102, 255, 0.88)",
              },
            }}
          >
            {/* CONTENT */}
            <Box
              sx={{
                position: "relative",
                px: 3,
                pt: 7,          // ⬅ space below title
                pb: 3,
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
