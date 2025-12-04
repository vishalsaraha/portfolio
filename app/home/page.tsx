import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';


export default function HomePage() {
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
            <Box>
             <Image 
                src="/images/typewriter.png" 
                alt="type writer image" 
                width={120}
                height={80} 
              />
         </Box>
        </Grid>
        <Grid size={4}>
          
        </Grid>
        <Grid size={8}>
         
        </Grid>
      </Grid>
    </Box>
  );
}
