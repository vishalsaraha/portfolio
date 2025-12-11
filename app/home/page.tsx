import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Navbar from '../components/nav';
import Typography from '@mui/material/Typography';


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
          <Grid size={6}>
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
        <Grid size={4}
        sx={{}}
        >
          <Typography>Vishal Muthappa</Typography>
        </Grid>
        <Grid>
          <audio src=""></audio>
        </Grid>
       
      </Grid>
    </Box>
    </div>
  );
}
