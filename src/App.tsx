import React, {ReactNode} from 'react';
import './App.css';
import {Container, Grid} from '@mui/material';
import Navbar from './components/navbar';
import Typography from '@mui/material/Typography';
import PopularCard from './components/card/popular-card';
import SearchContainer from './components/search-container';

function Item(props: { children: ReactNode }) {
  return null;
}

function App() {
  return (
    <div className="App">
      <Container
        maxWidth="lg"
        sx={{
          background: '#FFF8DC'
        }}
      >
        <Navbar/>

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
      </Container>
    </div>
  );
}

export default App;
