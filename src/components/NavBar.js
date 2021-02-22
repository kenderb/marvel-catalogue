import React from 'react';
import { Link } from 'react-router-dom';
import navIcon from '../assets/images/MarvelLogo.svg';
import { NavBar } from './styled/lib';

const FilterComics = () => (
  <header>
    <NavBar>
      <ul>
        <li>
          <Link to="/">
            {' '}
            <img src={navIcon} alt="nav logo" />
            {' '}
          </Link>
        </li>
        <li>
          <Link to="/"> List </Link>
        </li>
      </ul>
    </NavBar>
  </header>
);

export default FilterComics;
