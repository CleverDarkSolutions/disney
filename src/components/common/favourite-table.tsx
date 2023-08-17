import React, {useEffect, useState} from 'react'
import {DataGrid} from '@mui/x-data-grid';
import {CharacterFiltered, columns} from './data-table';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {API_URL} from '../../controller/favourite-characters';

const FavouriteTable = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [favList,setFavList] = useState()
  useEffect( () => {
    const getFavourites = async() => {
      await axios.get(`${API_URL}/favourites`)
        .then( (res) => setFavList(res.data) )
        .then( () => setIsLoading(false))
    }
    getFavourites().then( () => console.log('Data fetched') )
  },[] )
  return(
    <div style={{ minHeight: 500, width: '100%' }}>
      {isLoading ? (<p>Loading...</p>) : (
        <DataGrid
          style={{
            border: 'none',
            minHeight: 500,
          }}
          rows={favList || []}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      )}
    </div>
  )
}

export default FavouriteTable;