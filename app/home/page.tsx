import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';


export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Box sx={{
            backgroundColor: 'black',
           
          }}>
          </Box>
        </Grid>
        <Grid size={6}>
          <Box sx={{
            alignItems: "right"
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
        <Grid size={2}>
          {/* Empty Grid for layout */}
        </Grid>
      </Grid>
    </Box>
  );
}
