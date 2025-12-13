import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

export default function Socials(){
        return(
            <div>
                 {/* NESTED GRID for the four social icons (4 columns, 12 units total) */}
          <Grid container spacing={0}>
            
            {/* Social Icon 1 (X) */}
            <Grid 
              size={{ xs: 3 }}
              sx={{ borderRight: 2, borderColor: "#0066FF", display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60px' }}
            >
              {/* <IconButton color="primary">{<XIcon />}</IconButton> */}
              <Box sx={{ color: '#0066FF', fontSize: '30px', fontWeight: 'bold' }}>X</Box>
            </Grid>
            
            {/* Social Icon 2 (Dribbble/Wheel) */}
            <Grid 
              size={{ xs: 3 }}
              sx={{ borderRight: 2, borderColor: "#0066FF", display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60px' }}
            >
              {/* <IconButton color="primary">{<DribbbleIcon />}</IconButton> */}
              <Box sx={{ color: '#0066FF', fontSize: '30px', fontWeight: 'bold' }}>⟟</Box> {/* Placeholder */}
            </Grid>
            
            {/* Social Icon 3 (Instagram) */}
            <Grid 
             size={{ xs: 3 }}
              sx={{ borderRight: 2, borderColor: "#0066FF", display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60px' }}
            >
              {/* <IconButton color="primary">{<InstagramIcon />}</IconButton> */}
              <Box sx={{ color: '#0066FF', fontSize: '30px', fontWeight: 'bold' }}>⌾</Box> {/* Placeholder */}
            </Grid>
            
            {/* Social Icon 4 (LinkedIn) */}
            <Grid 
             size={{ xs: 3 }}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60px' }}
            >
              {/* <IconButton color="primary">{<LinkedInIcon />}</IconButton> */}
              <Box sx={{ color: '#0066FF', fontSize: '30px', fontWeight: 'bold' }}>in</Box>
            </Grid>
            
          </Grid>
            </div>
        )
}