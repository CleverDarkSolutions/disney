import React, {FormEvent, useState} from 'react'
import {TextField} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({setSearchQuery}: any) => (
  <form>
    <TextField
      id="search-bar"
      className="text"
      onInput={(e: any) => {
        setSearchQuery(e.target.value);
      }}
      label="Enter a city name"
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton type="submit"
      aria-label="search">
      <SearchIcon style={{ fill: 'blue' }} />
    </IconButton>
  </form>
);

export default SearchBar;