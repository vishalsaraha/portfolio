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

            {/* midcall component */}
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
             backgroundColor: "#0066FF",
            minHeight: '200px',
            maxHeight: '300px',
          }}
        >
  
          <Grid>
            hello
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
          }}>
            


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

            sx={{ p: 4,
               height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
                      fontSize: '10px', 
                      color: '#0066FF', 
                      mb: 0.5,
                      textTransform: 'uppercase',
                      opacity: 0.8,
                        fontFamily: 'monospace', 
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
            size={{ xs: 6 }} 
            sx={{
              backgroundColor: "#0066FF", // Primary blue background
              display: "flex",
              flexDirection: "row",
              justifyContent: 'space-evenly',
              p: 5, 
              color: "white", 
              borderRight: 2, // Keeps your grid border consistency
              borderColor: "#0066FF",
            }}
          >
            <Grid>
            {/* SECTION 1: WEBSITE */}
            <Box sx={{ mb: 6 }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  border: '1px solid white', 
                  px: 2, 
                  py: 0.5,
                  borderRadius: '4px', // Squared-off technical look
                  fontSize: '0.7rem',
                  letterSpacing: '0.1rem',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  mb: 3,
                  color: 'white'
                }}
              >
                [ WEBSITE_INDEX ]
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Link href="/dashboard" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  DASHBOARD →
                </Link>
                <Link href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  ABOUT →
                </Link>
                <Link href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  CONTACT →
                </Link>
              </Box>
            </Box>

            {/* SECTION 2: INTERWEB */}
            <Box>
              <Typography 
                variant="overline" 
                sx={{ 
                  border: '1px solid white', 
                  px: 2, 
                  py: 0.5,
                  borderRadius: '4px', 
                  fontSize: '0.7rem',
                  letterSpacing: '0.1rem',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  mb: 3,
                  color: 'white'
                }}
              >
                [ INTERWEB_RESOURCES ]
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Link href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  PHOTO BOOK →
                </Link>
                <Link href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  FOLIOSTACK →
                </Link>
                <Link href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  LINKBOARD →
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid>
           <Box sx={{ mb: 6 }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  border: '1px solid white', 
                  px: 2, 
                  py: 0.5,
                  borderRadius: '4px', // Squared-off technical look
                  fontSize: '0.7rem',
                  letterSpacing: '0.1rem',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  mb: 3,
                  color: 'white'
                }}
              >
                [ WEBSITE_INDEX ]
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Link href="/dashboard" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  DASHBOARD →
                </Link>
                <Link href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  ABOUT →
                </Link>
                <Link href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  CONTACT →
                </Link>
              </Box>
            </Box>
              <Box>
              <Typography 
                variant="overline" 
                sx={{ 
                  border: '1px solid white', 
                  px: 2, 
                  py: 0.5,
                  borderRadius: '4px', 
                  fontSize: '0.7rem',
                  letterSpacing: '0.1rem',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  mb: 3,
                  color: 'white'
                }}
              >
                [ INTERWEB_RESOURCES ]
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Link href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  PHOTO BOOK →
                </Link>
                <Link href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  FOLIOSTACK →
                </Link>
                <Link href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  LINKBOARD →
                </Link>
              </Box>
            </Box>
            </Grid>
      </Grid>
      </Grid>
      
      {/* ------------------------------------- */}
      {/* 2. FOOTER ROW (3 COLUMNS / 12 units)  */}
      {/* ------------------------------------- */}
      <Grid
        container
        spacing={0}
        sx={{
          border: 2,
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
                    flexDirection: 'column', 
                    alignItems: 'flex-start', 
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
                    [ CONTACT_MAIL ID ]
                  </Typography>

                  <Link 
                    href="mailto:vishalmuthappa45@gmail.com" >
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#0066FF', 
                        fontWeight: 800, 
                        fontSize: '0.9rem',
                        lineHeight: 1,
                        wordBreak: 'break-all' 
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
                alignItems: 'stretch', 
                justifyContent: 'center',
                padding: '16px 24px', 
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
                  borderTop: '1px solid rgba(0, 102, 255, 0.1)',
                }}
              >
                DESIGNED BY VISHAL MUTHAPPA // 2025
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
