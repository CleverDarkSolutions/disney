import React, {ReactNode} from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './views/home';
import Favourites from './views/favourites';
import {Container} from '@mui/material';
import Navbar from './components/navbar';

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
