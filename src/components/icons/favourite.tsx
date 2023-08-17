import React, {useEffect, useState} from 'react'
import {Star, StarBorder, StarOutlined} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import {CharacterFiltered} from '../common/data-table';
import {useDispatch, useSelector} from 'react-redux';
import {API_URL} from '../../controller/favourite-characters';
import axios from 'axios';

const Favourite = (props: {character: CharacterFiltered}) => {
  const [favList,setFavList] = useState<CharacterFiltered[]>()
  useEffect( () => {
    const getFavourites = async() => {
      await axios.get(`${API_URL}/favourites`)
        .then( (res) => setFavList(res.data) )
    }
    getFavourites().then( () => console.log(favList) )
  },[] )
  return(
    <IconButton onClick={async () => {
      if (favList) {
        if (favList?.some((item: CharacterFiltered) => item.id === props.character.id))
          await axios.delete(`${API_URL}/favourites/${props.character.id}`)
            .then(() => console.log('Deleted'))
        else {
          await axios.post(`${API_URL}/favourites`, props.character)
            .then((res) => res.data).then( () => console.log(props.character))
        }
        window.location.reload()
      }
    }}>
      {favList?.some( (item: CharacterFiltered) => item.id === props.character.id) ?
        <Star/> : <StarBorder/>}
    </IconButton>
  )
}

export default Favourite