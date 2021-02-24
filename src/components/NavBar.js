import React from 'react';
import { Link } from 'react-router-dom';
import navIcon from '../assets/images/MarvelLogo.svg';
import { Header, NavUl, RigthNavWrapper } from './styled/lib';

const FilterComics = () => (
  <Header>
    <nav>
      <NavUl>
        <li>
          <Link to="/">
            {' '}
            <img src={navIcon} alt="nav logo" />
            {' '}
          </Link>
        </li>
        <RigthNavWrapper>
          <Link to="/"> List </Link>
        </RigthNavWrapper>
      </NavUl>
    </nav>
  </Header>
);

export default FilterComics;
