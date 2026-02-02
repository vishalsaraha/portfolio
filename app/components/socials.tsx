"use client";
import Box from '@mui/material/Box';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledGridItem = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  minHeight: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.25s ease',
  '&:hover': {
    backgroundColor: '#0066FF',
    '& .social-icon-box': { color: '#fff' },
  },
  '& .social-icon-box': {
    color: '#0066FF',
    display: 'flex',
    transition: 'color 0.25s ease',
  },
  '& svg': { fontSize: '2rem' },
}));

const SOCIAL_LINKS = [
  { icon: <XIcon />, url: 'https://x.com/Vishalmuthappa', label: 'X' },
  { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/vishal-muthappa/', label: 'LinkedIn' },
  { icon: <GitHubIcon />, url: 'https://github.com/vishalsaraha', label: 'GitHub' },
  { icon: <AlternateEmailIcon />, url: 'mailto:vishalmuthappa45@gmail.com', label: 'Email' },
];

export default function Socials() {
  return (
    <Grid container sx={{ width: '100%', height: '100%', alignItems: 'stretch' }}>
      {SOCIAL_LINKS.map((social, index) => (
        <Grid
          key={index}
          size={{ xs: 3 }}
          sx={{
            // Add border to all but the last item
            borderRight: index !== SOCIAL_LINKS.length - 1 ? '2px solid #0066FF' : 'none',
            display: 'flex',
          }}
        >
          <Link
            href={social.url}
            // Use _blank for web links, but usually not necessary for mailto
            target={social.url.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
            style={{ width: '100%', textDecoration: 'none' }}
          >
            <StyledGridItem>
              <Box className="social-icon-box">
                {social.icon}
              </Box>
            </StyledGridItem>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}