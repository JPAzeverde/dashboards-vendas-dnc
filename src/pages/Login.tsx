import { Box, Grid } from '@mui/material'
import { BannerImage } from '@/componnents'




function Login() {
  return (
     <Box>
      <Grid container>
        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 6 
          }}
          sx={{
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            height:'100vh'
          }}>
            Login
        </Grid>
        <Grid
          size={{
            sm: 6,
          }}
          sx={{
            display:{xs:'none',sm:'block'},
          }}>
            <BannerImage />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
