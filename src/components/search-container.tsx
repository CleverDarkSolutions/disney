import React from 'react'
import Box from '@mui/material/Box';
import {Container, Grid, Paper} from '@mui/material';
import Image from './common/image';
import Typography from '@mui/material/Typography';
import SearchBar from './common/searchbar';

const SearchContainer = () => {
  return(
    <Box
      sx={{
        display: 'flex',
      }}
      marginTop={30}
      minHeight={500}
      component={Paper}
      borderRadius={16}
      elevation={3}>
      <Image rounded={16}
        width="45%"
        height="500px"
      />
      <Container maxWidth="sm">
        <Typography variant="h3"
          sx={{
            paddingTop: 10
          }}
          gutterBottom>
          The best animated Disney characters of all time
        </Typography>
        <SearchBar/>
      </Container>
    </Box>
  )
}
export default SearchContainer;