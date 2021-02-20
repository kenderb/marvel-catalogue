import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ name, thumbnail, description }) => (
  <div>
    <h1>{name}</h1>
    <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="" srcSet="" />
    <p>{description}</p>
  </div>
);

CharacterCard.propTypes = {
  thumbnail: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CharacterCard;
