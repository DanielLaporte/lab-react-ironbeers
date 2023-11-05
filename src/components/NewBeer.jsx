import React, { useState } from 'react';
import './NewBeer.css';
import Header from './Header';

function NewBeerForm() {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza una solicitud POST para crear una nueva cerveza
    fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Lógica para manejar la respuesta después de crear la cerveza
        console.log('Nueva cerveza creada:', data);
        // Redirige a otra página si es necesario
      });
  };

  return (
    <div>
      <Header />
      <h3>New Beer</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline:</label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
          />
        </div>
        {/* Repite este patrón para los otros campos */}
        <div>
          <label htmlFor="attenuation_level">Attenuation Level:</label>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
}

export default NewBeerForm;
