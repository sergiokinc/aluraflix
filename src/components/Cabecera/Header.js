
import React from 'react';

const Header = ({ current }) => {
  return (
    <header>
      <h1>Aluraflix</h1>
      <nav>
        <ul>
          <li className={current === 'Home' ? 'active' : ''}>Home</li>
          <li className={current === 'Nuevo Video' ? 'active' : ''}>Nuevo Video</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
