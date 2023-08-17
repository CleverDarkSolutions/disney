import React, {useEffect, useState} from 'react'
import CharacterList from '../components/character-list';
import Button from '@mui/material/Button';
import SearchContainer from '../components/search/search-container';

const FavouritesPage = () => {
  return(
    <div>
      <SearchContainer/>
      <CharacterList table="favourite"/>
    </div>
  )
}

export default FavouritesPage