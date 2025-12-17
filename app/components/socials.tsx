"use client";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';



// 1. Create a styled Grid component
const StyledGridItem = styled(Grid)(() => ({
  width: '100%',
  minHeight: '120px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.25s ease',

  '&:hover': {
    backgroundColor: '#0066FF',
    '& .social-icon-box': {
      color: '#fff',
    },
  },

  '& .social-icon-box': {
    color: '#0066FF',
    transition: 'color 0.25s ease',
  },
  '& svg': {
      fontSize: '3rem', 
    },
}));



export default function Socials(){
        return(
            <div>
                 {/* NESTED GRID for the four social icons (4 columns, 12 units total) */}
          <Grid container spacing={0}>
              {/* X */}
              <Grid
                size={{ xs: 3 }}
                sx={{ borderRight: 2, borderColor: '#0066FF',
                  fontSize: '3rem',
                 }}
              >
                <StyledGridItem>
                  <Box className="social-icon-box" >
                    <XIcon />
                    
                  </Box>
                </StyledGridItem>
              </Grid>

              {/* LinkedIn */}
              <Grid
                size={{ xs: 3 }}
                sx={{ borderRight: 2, borderColor: '#0066FF' }}
              >
                <StyledGridItem>
                  <Box className="social-icon-box">
                    <LinkedInIcon />
                  </Box>
                </StyledGridItem>
              </Grid>

              {/* GitHub */}
              <Grid
                size={{ xs: 3 }}
                sx={{ borderRight: 2, borderColor: '#0066FF' }}
              >
                <StyledGridItem>
                  <Box className="social-icon-box">
                    <GitHubIcon />
                  </Box>
                </StyledGridItem>
              </Grid>

              {/* Email */}
              <Grid size={{ xs: 3 }}>
                <StyledGridItem>
                  <Box className="social-icon-box">
                    <AlternateEmailIcon />
                  </Box>
                </StyledGridItem>
              </Grid>
            </Grid>

            </div>
        )
}