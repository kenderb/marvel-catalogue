import React from 'react';
import PropTypes from 'prop-types';
import { HeroButton } from './styled/lib';

const HeroSelector = ({
  image, heroName, onClickHandler, selected,
}) => (
  <HeroButton
    type="button"
    onClick={() => onClickHandler(heroName)}
    style={{ backgroundColor: selected === heroName ? '#f7ba43' : 'white' }}
  >
    <img src={image} alt={heroName} />
  </HeroButton>
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
