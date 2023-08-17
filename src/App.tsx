import React, {ReactNode, useEffect} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './views/home';
import Favourites from './views/favourites';
import {Container} from '@mui/material';
import Navbar from './components/navbar';
import {useDispatch} from 'react-redux';
import {AddToFavs} from './store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(AddToFavs(    {
      id: 428,
      name: 'Test',
      films: 14,
      tvShows: ['123','123show'],
      picture: 'ajfskl'
    }))
  }, [])
  return (
    <div className="App">
      <Container
        maxWidth="lg"
        sx={{
          background: '#FFF8DC'
        }}
      >
        <Navbar/>
        <Routes>
          <Route path="/"
            element={<Home />} />
          <Route path="/favs"
            element={<Favourites />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
