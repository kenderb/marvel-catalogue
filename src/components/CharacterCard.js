import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ name, thumbnail, description }) => {
  const thumbnailSplit = thumbnail.path.split('//');
  thumbnailSplit[0] = 'https://';
  return (
    <div>
      <h1>{name}</h1>
      <img src={`${thumbnailSplit.join('')}.${thumbnail.extension}`} alt="" srcSet="" />
      <p>{description}</p>
    </div>
  );
};

CharacterCard.propTypes = {
  thumbnail: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CharacterCard;
