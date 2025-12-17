import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../components/nav';
import Midcall from '../components/typewriter';
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
    <Box  sx={{
    flexGrow: 1,
    mt: 15,
   
      }}>
      <Grid container spacing={0}
      sx={{
         border: 2,
          borderColor: "#0066FF",
          minHeight: '70vh',
          alignItems: 'stretch',
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

            {/* midcall component */}

        <Grid 
          container 
          spacing={0} 
          sx={{
            borderRight: 2,
            borderLeft: 2,
            borderBottom: 2,
            borderColor: "#0066FF",
            minHeight: '200px',
            maxHeight: '300px',
          }}
        >
  
          <Grid 
           size={{xs: 12}} 
            sx={{ 
             
                width: '100%',
                height: '100%',
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                p: 0,
            }}
          >
             <Box sx={{ width: '100%', height: '100%' }}>
                <Midcall/>
             </Box>
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
            borderBottom: 2,
            borderColor: "#0066FF",
            minHeight: '200px',
            maxHeight: '300px',
          }}
        >
  
          <Grid 
           size={{xs: 12}} 
            sx={{ 
             
                width: '100%',
                height: '100%',
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                p: 0,
            }}
          >
             <Box sx={{ width: '100%', height: '100%' }}>
           
             </Box>
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
        
        {/* === COLUMN 1 (6/12) === */}
        <Grid
            size={{ xs: 6 }}
            sx={{
              position: "relative",
              borderRight: 2,
              borderColor: "#0066FF",
              color: "#0066FF",
         
            }}
          >
            {/* TOP LEFT */}
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                lineHeight: 1,
                color: "#0066FF",
              }}
            >
              +
            </Typography>

            {/* TOP RIGHT */}
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                lineHeight: 1,
                color: "#0066FF",
              }}
            >
              +
            </Typography>

            {/* BOTTOM LEFT */}
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                bottom: 8,
                left: 8,
                lineHeight: 1,
                color: "#0066FF",
              }}
            >
              +
            </Typography>

            {/* BOTTOM RIGHT */}
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                bottom: 8,
                right: 8,
                lineHeight: 1,
                color: "#0066FF",
              }}
            >
              +
            </Typography>

            {/* CONTENT */}
            <Box 

            sx={{ p: 3,
               height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
               }}
             
             >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Vishal Muthappa MCA.,
              </Typography>

              <Typography variant="body2" sx={{ mt: 1 }}>
                A front-end developer and UI/UX specialist with a Masters in Computer
                Applications, I am passionate about crafting seamless digital experiences.
                My expertise in Next.js, MUI, and Shopify allows me to develop responsive
                web applications and high-performing eCommerce websites. In my recent work
                on the PNG National Examination Results website, I leveraged these
                technologies to improve site performance and enhance user experience
                across devices. I am committed to creating user-centric designs that drive
                engagement and satisfaction.
              </Typography>
            </Box>
          </Grid>


        
        {/* === COLUMN 2 (6/12) === */}
        <Grid 
           size={{xs: 6}} 
        >
          <Typography variant="h6" sx={{ mb: 1, textDecoration: 'underline' }}>
            Website
          </Typography>
           <Link href="/dashboard" scroll={false}>
              Dashboard
            </Link>
          <Link href="#" color="inherit" >ABOUT →</Link>
          <Link href="#" color="inherit" >CONTACT →</Link>

          <Typography variant="h6" sx={{ mt: 3, mb: 1, textDecoration: 'underline' }}>
            Interweb
          </Typography>
          <Link href="#"  color="inherit" >PHOTO BOOK →</Link>
          <Link href="#" color="inherit" >FOLIOSTACK →</Link>
          <Link href="#"  color="inherit">LINKBOARD →</Link>
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
        borderBottom: 2,
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
                    flexDirection: 'column', // Stack label and email
                    alignItems: 'flex-start', // Align left for a clean grid start
                    justifyContent: 'center',
                    padding: '16px 20px',
                    backgroundColor: 'transparent',
                  }}
                >
                  {/* Technical Prefix Label */}
                  <Typography 
                    sx={{ 
                      fontFamily: 'monospace', 
                      fontSize: '10px', 
                      color: '#0066FF', 
                      mb: 0.5,
                      textTransform: 'uppercase',
                      opacity: 0.8
                    }}
                  >
                    [ CONTACT_MAILID ]
                  </Typography>

                  <Link 
                    href="mailto:vishalmuthappa45@gmail.com" >
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#0066FF', 
                        fontWeight: 800, // Matching Mike Kus bold style
                        fontSize: '0.9rem',
                        lineHeight: 1,
                        wordBreak: 'break-all' // Ensures it doesn't break your grid on mobile
                      }}
                    >
                      VISHALMUTHAPPA45@GMAIL.COM
                    </Typography>
                  </Link>
                </Grid>

        {/* FOOTER COLUMN 2: Descriptor Text */}
            <Grid 
              size={{ xs: 4 }}
              sx={{
                borderRight: '2px solid #0066FF',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch', // Stretches content to fill the grid cell
                justifyContent: 'center',
                padding: '16px 24px', // Professional spacing
                backgroundColor: 'transparent', 
              }}
            >
              {/* Small Technical Label */}
              <Typography 
                sx={{ 
                  fontFamily: 'monospace', 
                  fontSize: '10px', 
                  color: '#0066FF', 
                  mb: 1.5,
                  textTransform: 'uppercase',
                  opacity: 0.8
                }}
              >
                Inspiration Ref:
              </Typography>

              {/* Main Names Row */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline' 
              }}>
                <Typography 
                  sx={{ 
                    fontWeight: 900, 
                    color: '#0066FF', 
                    fontSize: '0.9rem',
                    letterSpacing: '0.02em'
                  }}
                >
                  MIKE KUS STUDIO
                </Typography>

                {/* Minimalist dot/divider */}
                <Box sx={{ width: '4px', height: '4px', bgcolor: '#0066FF', borderRadius: '50%', opacity: 0.4 }} />

                <Typography 
                  sx={{ 
                    fontWeight: 900, 
                    color: '#0066FF', 
                    fontSize: '0.9rem',
                    letterSpacing: '0.02em'
                  }}
                >
                  HYVE SYSTEMS
                </Typography>
              </Box>

              {/* Status Footer */}
              <Typography 
                sx={{ 
                  fontFamily: 'monospace', 
                  fontSize: '9px', 
                  color: 'rgba(0, 102, 255, 0.5)', 
                  mt: 2,
                  textAlign: 'right',
                  pt: 1,
                  borderTop: '1px solid rgba(0, 102, 255, 0.1)' // Very faint internal line
                }}
              >
                DESIGNED BY VISHAL M // 2025
              </Typography>
            </Grid>

        {/* FOOTER COLUMN 3: Social Media Icons (NESTED GRID) */}
        <Grid 
          size={{ xs: 4 }}
        >
          <Socials/>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
