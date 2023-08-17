import React, {ReactNode, useEffect} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './views/home';
import {Container} from '@mui/material';
import Navbar from './components/navbar';
import {useDispatch} from 'react-redux';
import FavouritesPage from './views/favourites-page';

function App() {
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
          <Route path="/home"
            element={<Home />} />
          <Route path="/favs"
            element={<FavouritesPage />} />
          <Route path="*"
            element={<Home/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
