import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="link">
        Inicio
      </Link>
    </header>
  );
};

export default Header;
