import Box from '@mui/material/Box';
import Image from "next/image";
import { Grid } from "@mui/material";


export default function Midcall() {
  return (
    <div>
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <Box 
            sx={{
              position: 'relative',
              
              height: 300,
             
              width: '100%', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image 
              src="/images/typewriter.png" 
              alt="Typewriter image" 
              width={400}
              height={300} 
              draggable={false}
              style={{ 
                display: 'block',
                alignItems: 'center',
                 zIndex: 10,
              }} 
            />
            
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
      </Grid>
    </div>
  );
}