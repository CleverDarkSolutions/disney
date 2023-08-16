import React, {useState} from 'react'
import {Grid, Paper, Typography} from '@mui/material';
import DataTable from './common/data-table';
import Box from '@mui/material/Box';
import axios from 'axios';

const CharacterList = () => {
  return(
    <Box
      sx={{
        display: 'flex',
      }}
      marginTop={10}
      padding={3}
      minHeight={300}
      component={Paper}
      elevation={3}>
      <Grid container>
        <Grid item
          sx={{
            textAlign: 'left',
          }}
          xs={12}>
          <Typography variant="h5">
            Characters
          </Typography>
        </Grid>
        <Grid item
          marginTop={5}
          xs={12}>
          <DataTable/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CharacterList;