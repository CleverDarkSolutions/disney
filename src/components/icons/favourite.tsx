import React from 'react'
import {Star, StarBorder, StarOutlined} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import {CharacterFiltered} from '../common/data-table';
import {AddToFavs, DeleteFromFavs} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

const Favourite = (props: {character: CharacterFiltered}) => {
  const dispatch = useDispatch();
  const favList: CharacterFiltered[] = useSelector((state: any) => state.favs)
  return(
    <IconButton onClick={() => {
      console.log(favList)
      if(favList.some( (item: CharacterFiltered) => item.id === props.character.id))
        dispatch(DeleteFromFavs(props.character.id))
      else {
        dispatch(AddToFavs(props.character))
      }
    }}>
      {favList.some( (item: CharacterFiltered) => item.id === props.character.id) ?
        <Star/> : <StarBorder/>}
    </IconButton>
  )
}

export default Favourite