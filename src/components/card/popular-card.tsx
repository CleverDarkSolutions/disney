import React from 'react'
import {Card, CardActions, CardContent, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star';
import Image from '../common/image';
import PopularCardDescription from './popular-card-description';

const PopularCard = (props: {films: number, tvShows: number, image: string, name: string}) => {
  return(
    <Card sx={{ minWidth: 200, minHeight: 200, height: 450, padding: 2, position: 'relative' }}>
      <Image src={props.image}/>
      <CardContent>
        <Grid container
          spacing={2}>
          <Grid item
            xs={10}>
            <Typography sx={{ textAlign: 'left' }}
              color="text.primary"
              variant="h5"
              gutterBottom>
              {props.name}
            </Typography>
          </Grid>
          <Grid item
            xs={2}>
            <StarIcon/>
          </Grid>
        </Grid>
        <PopularCardDescription
          films={props.films}
          tvShows={props.tvShows}/>
      </CardContent>
    </Card>
  )
}

export default PopularCard
