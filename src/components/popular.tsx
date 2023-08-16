import React, {useEffect, useState} from 'react'
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import PopularCard from './card/popular-card';
import axios from 'axios';
import {Character} from './common/data-table';

const Popular = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [disneyData, setDisneyData] = useState<Character[]>();
  useEffect(() => {
    axios.get('https://api.disneyapi.dev/character')
      .then(res => {
        if (Array.isArray(res.data.data)) {
          const sortedData = res.data.data.sort((a: Character, b: Character) => b.films.length - a.films.length);
          const preservedData = sortedData.slice(0, 3);

          setDisneyData(preservedData);
        } else {
          console.error('API response is not an array:', res.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false); // Request completed, set isLoading to false
      });
  }, []);
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
        {disneyData?.map( (data, index) => (
          <Grid item
            xs={4}
            key={index}>
            <PopularCard
              films={data.films.length}
              tvShows={data.tvShows.length}
              image={data.imageUrl}
              name={data.name}
            />
          </Grid>
        ) )}
      </Grid>
    </div>
  )
}

export default Popular;