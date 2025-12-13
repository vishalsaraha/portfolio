"use client";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';

const primaryColor = "#0066FF";
const hoverColor = primaryColor;
const iconColor = primaryColor;
const hoverIconColor = "white"; 

// 1. Create a styled Grid component
const StyledGridItem = styled(Grid)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  minHeight: '60px',
  cursor: 'pointer', 
  transition: 'background-color 0.3s ease-in-out', 

  // 2. Define the Hover State
  '&:hover': {
    backgroundColor: hoverColor, // Background turns blue
    
    // 3. Target the icon's color change on hover
    // We target the Box inside the Grid using its class name
    '& .social-icon-box': {
      color: hoverIconColor, // Icon color turns white
    },
  },
  
  // Define default style for the icon box (using the class)
  '& .social-icon-box': {
    color: iconColor,
    fontSize: '30px', 
    fontWeight: 'bold',
    transition: 'color 0.3s ease-in-out',
  }
}));

export default function Socials(){
        return(
            <div>
                 {/* NESTED GRID for the four social icons (4 columns, 12 units total) */}
          <Grid container spacing={0}>
            
            
            <Grid 
              size={{ xs: 3 }}
              sx={{ borderRight: 2, borderColor: "#0066FF", display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
             <StyledGridItem >
              <Box className="social-icon-box"><XIcon /></Box>
            </StyledGridItem>
            </Grid>
            
            
            <Grid 
              size={{ xs: 3 }}
              sx={{ borderRight: 2, borderColor: "#0066FF", display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60px' }}
            >
              {/* <IconButton color="primary">{<DribbbleIcon />}</IconButton> */}
              <Box sx={{ color: '#0066FF', fontSize: '30px', fontWeight: 'bold' }} className="social-icon-box"><LinkedInIcon/></Box> {/* Placeholder */}
            </Grid>
            
           
            <Grid 
             size={{ xs: 3 }}
              sx={{ borderRight: 2, borderColor: "#0066FF", display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60px' }}
            >
              {/* <IconButton color="primary">{<InstagramIcon />}</IconButton> */}
              <Box sx={{ color: '#0066FF', fontSize: '30px', fontWeight: 'bold' }} className="social-icon-box"><GitHubIcon /></Box> {/* Placeholder */}
            </Grid>
            
           
            <Grid 
             size={{ xs: 3 }}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60px' }}
            >
              {/* <IconButton color="primary">{<LinkedInIcon />}</IconButton> */}
              <Box sx={{ color: '#0066FF', fontSize: '30px', fontWeight: 'bold' }} className="social-icon-box"><AlternateEmailIcon /></Box>
            </Grid>
            
          </Grid>
            </div>
        )
}