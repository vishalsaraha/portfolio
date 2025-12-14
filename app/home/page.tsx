import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Navbar from '../components/nav';
import AsciiArt from '../components/Asciiart';
import Socials from '../components/socials';
import HeroAscii from "../components/HeroAscii";
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function BasicGrid() {
  return (
    //blue secondory colour #0066FF
    //and white and grey
    <div>
    <Box 
      sx={{
        position: 'fixed', 
        top: 0,
        left: 0,
        right: 0, 
        zIndex: 1000,
        backgroundColor: 'white', 
        borderBottom: 2,
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
            <AsciiArt/>
        </Box>
      </Grid>
        
              <Grid size={8}>
                 
                  <HeroAscii />
                </Grid>
                          
              <Grid>
                {/* <audio src=""></audio> */}
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
             padding: '10px',
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
          <Typography variant="body1" sx={{ fontWeight: 'bold', p: 2, }}>
           Vishaluthappa © 2025
          </Typography>
          <Typography variant="body2" sx={{  p: 2, }}>
            A front-end developer and UI/UX specialist with a Masters in Computer Applications, I am passionate about
crafting seamless digital experiences. My expertise in Next.js, MUI, and Shopify allows me to develop
responsive web applications and high-performing eCommerce websites. In my recent work on the PNG
National Examination Results website, I leveraged these technologies to improve site performance and
enhance user experience across devices. I am committed to creating user-centric designs that drive
engagement and satisfaction.
          </Typography>
          
          <Box sx={{ p: 2, }}>
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
          <Link href="vishalmuthappa45@gmail.com" color="inherit">
            vishalmuthappa45@gmail.com
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
           Logo
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
