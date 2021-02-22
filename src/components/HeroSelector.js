import React from 'react';
import PropTypes from 'prop-types';

const HeroSelector = ({
  image, heroName, onClickHandler, selected,
}) => (
  <button
    type="button"
    onClick={() => onClickHandler(heroName)}
    style={{ backgroundColor: selected === heroName ? 'red' : 'transparent' }}
  >
    <img src={image} alt={heroName} />
  </button>
);

HeroSelector.propTypes = {
  image: PropTypes.string.isRequired,
  heroName: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default HeroSelector;
