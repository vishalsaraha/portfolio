import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../components/nav';
import AsciiArt from '../components/Asciiart';
import BentoCard from '../components/bendo';
import Socials from '../components/socials';
import ExperiencePage from '../pages/experience';
import Projectblock from '../projects/projects';
import HeroAscii from "../components/HeroAscii";
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import data from "../data/projects.json";




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
      
       <Grid 
            size={{ lg: 4 }}
            // 'none' hides it on extra-small screens (phones)
            // 'block' (or 'flex') makes it reappear on medium/large screens
            display={{ xs: 'none', md: 'block' }} 
          >
            <Box 
              sx={{
                position: 'relative', 
                borderRight: 2,
                borderColor: "#0066FF",
              }}
            >
                <AsciiArt />
            </Box>
          </Grid>
                  
              <Grid size={{lg: 8, md: 12}}>
                 
                  <HeroAscii />
                </Grid>
                          
              <Grid sx={{
                alignItems: 'center',
                 borderTop: 2,
            borderColor: "#0066FF",
              }}>
                <BentoCard/>
              
              </Grid>
            
            </Grid>
          </Box>

    {/*Typewriter component*/}
      {/* <Box>
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
         size={{lg: 12, md: 12}}
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
      </Box> */}
      

      <Box>
     {/* PROJECTS SECTION TITLE */}
     <Box sx={{ backgroundColor: "#0066FF",}}>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "2rem", md: "3.2rem" },
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: -1,
            display: "inline-block",
          ml: 5,
          }}
        >
          Projects
        </Typography>
      </Box>
          <Grid
            container
            spacing={2}
            sx={{
              borderColor: "#0066FF",
              backgroundColor: "#0066FF",
              p: 3,
              justifyContent: "center",
            }}
          >
            {data.map((item) => (
              <Grid
                key={item.id}
                size={{xs:12, sm:6, md: 4, lg: 3}}
                display="flex"
                justifyContent="center"
                
              >
                <Projectblock
                  title={item.name}
                  description={item.description}
                  image={item.image}
                  link={item.url}
                  technologies={item.technologies}
                />
              </Grid>
            ))}
          </Grid>
     </Box>


      <Box>
        {/* PAGE TITLE */}
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "2rem", md: "3.2rem" },
            color: "#0066FF",
            textTransform: "uppercase",
            letterSpacing: -1,
            display: "inline-block",
          ml: 5,
          
          }}
        >
        Work Experience
        </Typography>
      </Box>
        <Grid
          container 
          spacing={0} 
          sx={{
            borderRight: 2,
            borderLeft: 2,
            borderBottom: 2,
            borderColor: "#0066FF",
          }}>
            
         <ExperiencePage/>

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
            size={{ lg: 6, md:12 }}
            sx={{
              position: "relative",
          
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
            size={{ lg: 6, md:12 }} 
            sx={{
              backgroundColor: "#0066FF",
              display: "flex",
              flexDirection: "row",
              justifyContent: 'space-evenly',
              p: 5, 
              color: "white", 
              borderRight: 2, 
              borderColor: "#0066FF",
                fontFamily: 'monospace', 
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
                  fontSize: '0.7rem',
                  letterSpacing: '0.1rem',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  mb: 3,
                  color: 'white'
                }}
              >
                [ FRONTEND SKILLS ]
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  DASHBOARD 
                </Typography>
                <Typography  style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  ABOUT 
                </Typography>
                <Typography  style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  CONTACT 
                </Typography>
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
                  fontSize: '0.7rem',
                  letterSpacing: '0.1rem',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  mb: 3,
                  color: 'white'
                }}
              >
                [ BACKEND SKILLS ]
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography  style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  PHOTO BOOK 
                </Typography>
                <Typography  style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  FOLIOSTACK 
                </Typography>
                <Typography  style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  ARD 
                </Typography>
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
                  fontSize: '0.7rem',
                  letterSpacing: '0.1rem',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  mb: 3,
                  color: 'white'
                }}
              >
                [ DESIGNING TOOLS ]
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  DASHBOARD 
                </Typography>
                <Typography  style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  ABOUT 
                </Typography>
                <Typography  style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  CONTACT 
                </Typography>
              </Box>
            </Box>
              <Box>
              <Typography 
                variant="overline" 
                sx={{ 
                  border: '1px solid white', 
                  px: 2, 
                  py: 0.5,
                  fontSize: '0.7rem',
                  letterSpacing: '0.1rem',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  mb: 3,
                  color: 'white'
                }}
              >
                [ DATABASE AND HOSTING ]
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  PHOTO BOOK 
                </Typography>
                <Typography style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  FOLIOSTACK 
                </Typography>
                <Typography style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 700 }}>
                  KBOARD 
                </Typography>
              </Box>
            </Box>
            </Grid>
      </Grid>
      </Grid>
      
      {/* ------------------------------------- */}
      {/* 2. FOOTER ROW (STACKS TO 12, THEN ORIGINAL SIZES) */}
      {/* ------------------------------------- */}
      
      <Grid
        container
        spacing={0}
        sx={{
          border: '2px solid #0066FF',
          minHeight: '60px',
        }}
      >
        
        {/* FOOTER COLUMN 1 */}
        <Grid 
          /* Stacks at 12 on mobile/tablet, returns to your 2 or 4 on desktop */
          size={{ xs: 12, md: 12, lg: 4 }} 
          sx={{
            borderRight: { xs: 0, lg: '2px solid #0066FF' },
            borderBottom: { xs: '2px solid #0066FF', lg: 0 },
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            justifyContent: 'center',
            padding: '16px 20px',
            backgroundColor: 'transparent',
          }}
        >
          <Typography 
            sx={{ 
              fontFamily: 'monospace', fontSize: '10px', color: '#0066FF', mb: 0.5,
              textTransform: 'uppercase', opacity: 0.8
            }}
          >
            [ CONTACT_INFO ]
          </Typography>

          <Link href="mailto:vishalmuthappa45@gmail.com">
            <Typography 
            
              variant="body1" 
              sx={{ color: '#0066FF', fontWeight: 800, fontSize: '0.9rem', lineHeight: 1, wordBreak: 'break-all' }}
            >
              VISHALMUTHAPPA45@GMAIL.COM
            </Typography>
            
          </Link>
        </Grid>

        {/* FOOTER COLUMN 2 */}
        <Grid 
          size={{ xs: 12, md: 12, lg: 4 }}
          sx={{
            borderRight: { xs: 0, lg: '2px solid #0066FF' },
            borderBottom: { xs: '2px solid #0066FF', lg: 0 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch', 
            justifyContent: 'center',
            padding: '16px 24px', 
            backgroundColor: 'transparent', 
          }}
        >
          <Typography 
            sx={{ 
              fontFamily: 'monospace', fontSize: '10px', color: '#0066FF', mb: 1.5,
              textTransform: 'uppercase', opacity: 0.8
            }}
          >
            Inspiration Ref:
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <Typography sx={{ fontWeight: 900, color: '#0066FF', fontSize: '0.9rem' }}>
              MIKE KUS STUDIO
            </Typography>
            <Box sx={{ width: '4px', height: '4px', bgcolor: '#0066FF', borderRadius: '50%', opacity: 0.4 }} />
            <Typography sx={{ fontWeight: 900, color: '#0066FF', fontSize: '0.9rem' }}>
              HYVE SYSTEMS
            </Typography>
          </Box>

          <Typography 
            sx={{ 
              fontFamily: 'monospace', fontSize: '9px', color: 'rgba(0, 102, 255, 0.5)', 
              mt: 2, textAlign: 'right', pt: 1, borderTop: '1px solid rgba(0, 102, 255, 0.1)',
            }}
          >
            DESIGNED BY VISHAL MUTHAPPA // 2025
          </Typography>
        </Grid>

        {/* FOOTER COLUMN 3 */}
        <Grid size={{ xs: 12, md: 12, lg: 4 }}>
          <Socials/>
        </Grid>
      </Grid>

    </Box>
    </div>
  );
}
