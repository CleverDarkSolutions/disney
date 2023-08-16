import * as React from 'react';
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRow,
  GridRowModel,
  GridRowsProp, GridValidRowModel,
  GridValueGetterParams
} from '@mui/x-data-grid'
import StarIcon from '@mui/icons-material/Star'
import axios from 'axios';
import Image from '../common/image'
import {useEffect, useState} from 'react';

interface Character {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  __v: number;
}

interface CharacterFiltered {
  id: number;
  name: string;
  films: number;
  picture: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'image', // Image column
    headerName: 'Image',
    width: 130,
    renderCell: (params) => (
      <Image/>
    ),
  },
  { field: 'name', headerName: 'Name', width: 350 },
  {
    field: 'films',
    headerName: 'TV Shows Count',
    width: 150,
  },
  {
    field: 'favourite',
    headerName: 'Favourite',
    width: 150,
    renderCell: (params) => (
      <StarIcon/>
    )
  },
];

const DataTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [disneyData, setDisneyData] = useState<CharacterFiltered[]>();
  useEffect(() => {
    axios.get('https://api.disneyapi.dev/character')
      .then(res => {
        console.log(res.data)
        if (Array.isArray(res.data.data)) {
          const modifiedData: CharacterFiltered[] = [];

          res.data.data.forEach((character: Character) => {
            const randomNumber = Math.floor(Math.random() * 1000);
            modifiedData.push({
              id: randomNumber,
              name: character.name,
              films: character.films.length,
              picture: character.imageUrl
            });
          });

          setDisneyData(modifiedData);
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
  return (
    <div style={{ minHeight: 500, width: '100%' }}>
      {isLoading ? (<p>Loading...</p>) : (
        <DataGrid
          style={{
            border: 'none',
            minHeight: 500,
          }}
          rows={disneyData!}
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
      )
    </div>
  );
}

export default DataTable;