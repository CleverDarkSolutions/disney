import React from 'react'
import {Card, CardActions, CardContent, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star';
import Image from '../common/image';
import PopularCardDescription from './popular-card-description';

const PopularCard = () => {
  return(
    <Card sx={{ minWidth: 200, minHeight: 300, padding: 2 }}>
      <Image/>
      <CardContent>
        <Grid container
          spacing={2}>
          <Grid item
            xs={10}>
            <Typography sx={{ textAlign: 'left' }}
              color="text.primary"
              variant="h5"
              gutterBottom>
              Word of the Day
            </Typography>
          </Grid>
          <Grid item
            xs={2}>
            <StarIcon/>
          </Grid>
        </Grid>
        <PopularCardDescription/>
      </CardContent>
    </Card>
  )
}

export default PopularCard
