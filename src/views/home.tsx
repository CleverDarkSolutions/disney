import React from 'react'
import {Container, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import PopularCard from '../components/card/popular-card';
import SearchContainer from '../components/search/search-container';
import CharacterList from '../components/character-list';

const Home = () => {
  return(
    <div>
      <Typography variant="h2"
        sx={{
          paddingTop: 10
        }}
        gutterBottom>
        Most popular Disney characters
      </Typography>

      <Grid container
        spacing={2}>
        <Grid item
          xs={4}>
          <PopularCard/>
        </Grid>

        <Grid item
          xs={4}>
          <PopularCard/>
        </Grid>

        <Grid item
          xs={4}>
          <PopularCard/>
        </Grid>
      </Grid>

      <SearchContainer/>
      <CharacterList/>
    </div>
  )
}

export default Home;