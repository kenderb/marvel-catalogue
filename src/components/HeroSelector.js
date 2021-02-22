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
  image: PropTypes.string,
  heroName: PropTypes.string,
  selected: PropTypes.string,
  onClickHandler: PropTypes.func,
};

HeroSelector.defaultProps = {
  image: '',
  heroName: '',
  selected: '',
  onClickHandler: () => (''),
};

export default HeroSelector;
