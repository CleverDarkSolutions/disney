import React, {useState} from 'react'
import {Grid, Paper, Typography} from '@mui/material';
import DataTable, {CharacterFiltered} from './common/data-table';
import Box from '@mui/material/Box';
import {useSelector} from 'react-redux';
import FavouriteTable from './common/favourite-table';

const CharacterList = (props: {table: 'normal' | 'favourite'}) => {
  return(
    <Box
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
            {props.table === 'favourite' ? <div>Favourite Characters</div> : <div>Characters</div>}
          </Typography>
        </Grid>
        <Grid item
          marginTop={5}
          xs={12}>
          {props.table === 'normal' ? <DataTable/> : <FavouriteTable/>}
        </Grid>
      </Grid>
    </Box>
  )
}

export default CharacterList;