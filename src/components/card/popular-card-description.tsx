import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';

const PopularCardDescription = (props: {films: number, tvShows: number}) => (
  <Box sx={{
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: '100%',
  }}>
    <Typography sx={{ textAlign: 'left' }}>
      <Grid container
        spacing={2}>
        <Grid item
          xs={10}>Films: </Grid>
        <Grid item
          xs={2}>{props.films} </Grid>
      </Grid>
    </Typography>
    <Typography sx={{ textAlign: 'left' }}>
      <Grid container
        spacing={2}>
        <Grid item
          xs={10}>Tv shows: </Grid>
        <Grid item
          xs={2}>{props.tvShows} </Grid>
      </Grid>
    </Typography>
  </Box>
)

export default PopularCardDescription;