import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';

const PopularCardDescription = () => (
  <Box mt={10}>
    <Typography sx={{ textAlign: 'left' }}>
      <Grid container
        spacing={2}>
        <Grid item
          xs={10}>Films: </Grid>
        <Grid item
          xs={2}>123 </Grid>
      </Grid>
    </Typography>
    <Typography sx={{ textAlign: 'left' }}>
      <Grid container
        spacing={2}>
        <Grid item
          xs={10}>Tv shows: </Grid>
        <Grid item
          xs={2}>18 </Grid>
      </Grid>
    </Typography>
  </Box>
)

export default PopularCardDescription;