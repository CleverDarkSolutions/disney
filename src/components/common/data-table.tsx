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
import LiveTvIcon from '@mui/icons-material/LiveTv';
import {LiveTv} from '@mui/icons-material';
import TvTooltip from '../icons/tv-tooltip';
import Favourite from '../icons/favourite';
import {useSelector} from 'react-redux';

export interface Character {
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

export interface CharacterFiltered {
  id: number;
  name: string;
  films: number;
  tvShows: string[]
  picture: string;
}

export const columns: GridColDef[] = [
  {
    field: 'image', // Image column
    headerName: 'Image',
    width: 130,
    renderCell: (params) => (
      <Image src={params.row.picture}/>
    ),
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    renderCell: (params) => (
      <div>
        {params.row.name}
        {params.row.tvShows.length > 0 && (
          <TvTooltip title={params.row.tvShows.map( (title: string) => <p>{title}</p>)}/>
        )}
      </div>
    )
  },
  {
    field: 'films',
    headerName: 'Films Count',
    width: 100,
  },
  {
    field: 'favourite',
    headerName: 'Favourite',
    width: 80,
    renderCell: (params) => (
      <Favourite character={params.row}/>
    )
  },
];

const DataTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [disneyData, setDisneyData] = useState<CharacterFiltered[]>();
  useEffect(() => {
    axios.get('https://api.disneyapi.dev/character')
      .then(res => {
        if (Array.isArray(res.data.data)) {
          const modifiedData: CharacterFiltered[] = [];

          res.data.data.forEach((character: Character) => {
            if (character.films.length > 0) {
              modifiedData.push({
                id: character._id,
                name: character.name,
                films: character.films.length,
                picture: character.imageUrl,
                tvShows: character.tvShows
              });
            }
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
    </div>
  );
}

export default DataTable;