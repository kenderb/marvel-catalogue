import React from 'react';
import { Link } from 'react-router-dom';

const FilterComics = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/"> LOGO </Link>
        </li>
        <li>
          <Link to="/"> List </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default FilterComics;
