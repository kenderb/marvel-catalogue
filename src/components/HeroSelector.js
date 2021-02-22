import React from 'react';
import PropTypes from 'prop-types';

const HeroSelector = ({ image, heroName, onClickHandler }) => (
  <button type="button" onClick={() => onClickHandler(heroName)}>
    <img src={image} alt={heroName} />
  </button>
);

HeroSelector.propTypes = {
  image: PropTypes.string.isRequired,
  heroName: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default HeroSelector;
