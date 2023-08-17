import React from 'react'
import {Container, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import PopularCard from '../components/card/popular-card';
import SearchContainer from '../components/search/search-container';
import CharacterList from '../components/character-list';
import Popular from '../components/popular';

const Home = () => {
  return(
    <div>
      <Popular/>
      <SearchContainer/>
      <Grid container
        spacing={2}>
        <Grid item
          xs={6}>
          <CharacterList/>
        </Grid>

        <Grid item
          xs={6}>
          <CharacterList/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home;