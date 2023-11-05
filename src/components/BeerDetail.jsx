import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

<Header />
function BeerDetail() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener los detalles de la cerveza según beerId
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => response.json())
      .then((data) => setBeer(data));
  }, [beerId]);

  if (!beer) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetail;
