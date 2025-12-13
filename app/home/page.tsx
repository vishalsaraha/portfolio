import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Navbar from '../components/nav';
import Socials from '../components/socials'
import Typography from '@mui/material/Typography';
import { pressStart2P } from '../layout';
import Link from 'next/link';

export default function BasicGrid() {
  return (
    //blue secondory colour #0066FF
    //and white and grey
    <div>
    <Box 
      sx={{
        position: 'fixed', // Fixes it relative to the viewport
        top: 0,
        left: 0,
        right: 0, // Makes sure it stretches across the entire width
        zIndex: 1000,
        // Add background and border here to match your design
        backgroundColor: 'white', 
        borderBottom: 2, // Use borderBottom for a clean separation line
        borderColor: "#0066FF",
      }}
    >
  <Navbar/>
</Box>
    <Box sx={{ flexGrow: 1,
      marginTop: 15,
     }}>
      <Grid container spacing={2}
      sx={{
         border: 2,
      borderColor: "#0066FF",
      }}
      >
      
        <Grid size={4}>
        <Box 
          sx={{
            position: 'relative', 
            borderRight: 2,
            borderColor: "#0066FF",
          }}
        >
          {/* The Image acts as the background/base layer */}
          <Image 
            src="/images/typewriter.png" 
            alt="type writer image" 
            width={600}
            height={600} 
            draggable={false}
            // Ensure the image behaves like a block element
            style={{ display: 'block',
              alignItems: 'center',
            }} 
          />
          
          {/* The Video is the overlay layer */}
          <video 
            src="/videos/grid.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
           
            style={{
             position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -10,
            }}
          >
            Your browser does not support the video tag.
          </video>
        </Box>
      </Grid>
        
              <Grid size={6}>
                  <Typography 
                    className={pressStart2P.className} 
                    sx={{ 
                      // This line is crucial for overriding MUI's default font.
                      fontFamily: 'Press Start 2P, cursive', 
                    }}
                  >
                    Vishal Muthappa
                  </Typography>
                </Grid>
                          
              <Grid>
                <audio src=""></audio>
              </Grid>
            
            </Grid>
          </Box>

    <Box>
      
    
      <Grid 
        container 
        spacing={0}
        sx={{
          borderRight: 2,
          borderLeft: 2,
          borderColor: "#0066FF",
          minHeight: '400px',
          '& > .MuiGrid-item': {
             padding: '20px',
          }
        }}
      >
        
        {/* === COLUMN 1 (5/12) === */}
        <Grid 
           size={{xs: 5}}
          sx={{
            borderRight: 2,
            borderColor: "#0066FF",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Kus © 2025
          </Typography>
          <Typography variant="body2" sx={{ my: 2 }}>
            Working with brands ready to break the mould.
          </Typography>
          
          <Box sx={{ mt: 5 }}>
            <Link href="mailto:mike@mikekus.com" color="inherit">
              {/* This contact is moved to the footer row for accuracy, leaving a plus sign placeholder */}
              <Typography variant="h4" sx={{ color: '#0066FF', lineHeight: 1 }}>+</Typography>
            </Link>
          </Box>
        </Grid>
        
        {/* === COLUMN 2 (4/12) === */}
        <Grid 
           size={{xs: 4}} 
          sx={{
            borderRight: 2,
            borderColor: "#0066FF",
          }}
        >
          <Typography variant="h6" sx={{ mb: 1, textDecoration: 'underline' }}>
            Website
          </Typography>
          <Link href="#" display="block" color="inherit" underline="none">WORK →</Link>
          <Link href="#" display="block" color="inherit" underline="none">ABOUT →</Link>
          <Link href="#" display="block" color="inherit" underline="none">CONTACT →</Link>

          <Typography variant="h6" sx={{ mt: 3, mb: 1, textDecoration: 'underline' }}>
            Interweb
          </Typography>
          <Link href="#" display="block" color="inherit" underline="none">PHOTO BOOK →</Link>
          <Link href="#" display="block" color="inherit" underline="none">FOLIOSTACK →</Link>
          <Link href="#" display="block" color="inherit" underline="none">LINKBOARD →</Link>
        </Grid>
        
        {/* === COLUMN 3 (3/12) - Right/Empty Space === */}
        <Grid 
           size={{xs: 3}}
          sx={{
             display: 'flex', 
             alignItems: 'flex-end', 
             justifyContent: 'flex-end',
             paddingBottom: '20px' 
          }}
        >
          <Typography variant="h4" sx={{ color: '#0066FF', lineHeight: 1 }}>+</Typography>
        </Grid>

      </Grid>
      
      {/* ------------------------------------- */}
      {/* 2. FOOTER ROW (3 COLUMNS / 12 units)  */}
      {/* ------------------------------------- */}
      <Grid
        container
        spacing={0}
        sx={{
          borderRight: 2,
          borderLeft: 2,
          borderTop: 2, // Line separating the sections
          borderColor: "#0066FF",
          minHeight: '60px',
        }}
      >
        
        {/* FOOTER COLUMN 1: Contact Email */}
        <Grid 
         size={{ xs: 4 }}
          
          sx={{
            borderRight: 2,
            borderColor: "#0066FF",
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
          }}
        >
          <Link href="mailto:mike@mikekus.com" color="inherit">
            mike@mikekus.com
          </Link>
        </Grid>

        {/* FOOTER COLUMN 2: Descriptor Text */}
        <Grid 
           size={{ xs: 3 }}
          sx={{
            borderRight: 2,
            borderColor: "#0066FF",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: '#0066FF' }}>
            → Brand / Web / Creative
          </Typography>
        </Grid>

        {/* FOOTER COLUMN 3: Social Media Icons (NESTED GRID) */}
        <Grid 
          size={{ xs: 5 }}
        >
          <Socials/>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
