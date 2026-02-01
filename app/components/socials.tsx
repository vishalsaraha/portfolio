"use client";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledGridItem = styled(Box)(() => ({
  width: '100%',
  height: '100%', // Changed from min-height to 100% to fill the grid cell
  minHeight: '80px', // Adjusted for mobile height
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
    display: 'flex',
    transition: 'color 0.25s ease',
  },
  '& svg': {
    fontSize: '2rem', // Reduced slightly for better mobile fit
  },
}));

export default function Socials() {
  return (
    <Grid 
      container 
      spacing={0} 
      sx={{ 
        width: '100%', 
        height: '100%',
        alignItems: 'stretch' // Crucial: forces items to have the same height
      }}
    >
      {/* X */}
      <Grid
        size={{ xs: 3 }}
        sx={{ 
          borderRight: '2px solid #0066FF',
          display: 'flex' // Helps the StyledGridItem fill the height
        }}
      >
        <StyledGridItem>
          <Box className="social-icon-box">
            <XIcon />
          </Box>
        </StyledGridItem>
      </Grid>

      {/* LinkedIn */}
      <Grid
        size={{ xs: 3 }}
        sx={{ 
          borderRight: '2px solid #0066FF',
          display: 'flex' 
        }}
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
        sx={{ 
          borderRight: '2px solid #0066FF',
          display: 'flex' 
        }}
      >
        <StyledGridItem>
          <Box className="social-icon-box">
            <GitHubIcon />
          </Box>
        </StyledGridItem>
      </Grid>

      {/* Email */}
      <Grid 
        size={{ xs: 3 }}
        sx={{ display: 'flex' }}
      >
        <StyledGridItem>
          <Box className="social-icon-box">
            <AlternateEmailIcon />
          </Box>
        </StyledGridItem>
      </Grid>
    </Grid>
  );
}