import React, { useState, useEffect } from 'react';
import './RandomBeer.css';
import { Link } from 'react-router-dom';
import Header from './Header';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET para obtener una cerveza aleatoria
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => response.json())
      .then((data) => setRandomBeer(data));
  }, []);

  if (!randomBeer) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Header />
      <img src={randomBeer.image_url} alt={randomBeer.name} className="allbeers1"/>
      <h2>{randomBeer.name}</h2>
      <p>{randomBeer.tagline}</p>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>Contributed by: {randomBeer.contributed_by}</p>
      <Link to="/beers" className="link1">
          All Beers
        </Link>
    </div>
  );
}

export default RandomBeer;
