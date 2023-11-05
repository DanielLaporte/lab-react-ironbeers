import React, { useState, useEffect } from 'react';
import Header from './Header';
import './Beers.css';

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener todas las cervezas
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  return (
    <div>
      <Header /> {/* Agrega el componente Header */}
      <h3>All Beers</h3>
      
        {beers.map((beer) => (
          <li key={beer._id}>
            <img src={beer.image_url} alt={beer.name} className="allbeers" />
            <h4>{beer.name}</h4>
            <p1>{beer.tagline}</p1>
            <p2>Contributed by: {beer.contributed_by}</p2>
            
          </li>
        ))}
      
    </div>
  );
}

export default Beers;
