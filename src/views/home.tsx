import React, {useEffect, useState} from 'react'
import {Container, Grid} from '@mui/material';
import SearchContainer from '../components/search/search-container';
import CharacterList from '../components/character-list';
import Popular from '../components/popular';
const Home = () => {
  return(
    <div>
      <div>
        <Popular/>
        <Grid container
          spacing={2}>
          <Grid item
            xs={12}>
            <CharacterList table="normal"/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Home;