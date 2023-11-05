import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import image1 from '../assets/beers.png';
import image2 from '../assets/new-beer.png';
import image3 from '../assets/random-beer.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src={image1} alt="cervezas" />
        <Link to="/beers" className="link1">
          All Beers
        </Link>
        <img src={image3} alt="cerveza aleatoria" />
        <Link to="/random-beer" className="link1">
          Random Beer
        </Link>
        <img src={image2} alt="nueva cerveza" />
        <Link to="/new-beer" className="link1">
          New Beer
        </Link>
        
      </header>
    </div>
  );
}

export default App;
