import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Navbar from '../components/nav';
import Typography from '@mui/material/Typography';
import { pressStart2P } from '../layout';

export default function BasicGrid() {
  return (
    //blue secondory colour #0066FF
    //and white and grey
    <div>
    <Box>
    
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
            // 1. Set position to relative for the parent to act as the stacking container
            position: 'relative', 
            
            // Removed alignItems: "right" as it affects flex layout, not positioning.
            // If you need to align the content, use justifyContent or margin auto.
            
            borderRight: 2,
            borderColor: "#0066FF",
            
            // Ensure the Box has specific dimensions if the content doesn't fill it
            // For this example, we'll let the Image dictate the size.
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
              // 2. Set position to absolute to overlay it on the parent Box
              position: 'absolute',
              
              // 3. Position it precisely (e.g., top-left corner)
              top: 0,
              left: 0,
              
              // 4. Ensure it covers the image completely
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures the video covers the area without distorting the image aspect ratio
              
              // Optional: Increase zIndex to ensure it's on top of everything else in the Box
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
            <Grid container spacing={2}
            sx={{
              border: 2,
            borderColor: "#0066FF",
            }}
            >
          <Grid size={2}>
          <Box sx={{
            alignItems: "right",
              borderRight: 2,
             borderColor: "#0066FF",
          }}>
            <Image 
              src="/images/typewriter.png" 
              alt="type writer image" 
              width={600}
              height={600} 
            draggable={false} //stop image from dragging on to other thing
            />
          </Box>
        </Grid>
  
        <Grid size={8}>
          
          </Grid>
                    
        <Grid>
          <audio src=""></audio>
        </Grid>
       
      </Grid>

    </Box>
    </div>
  );
}
