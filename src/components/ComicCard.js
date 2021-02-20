import React from 'react';
import PropTypes from 'prop-types';

const ComicCard = ({ title, thumbnail, creators }) => {
  const thumbnailSplit = thumbnail.path.split('//');
  thumbnailSplit[0] = 'https://';

  const displayCreatorsName = () => (
    creators.items.map(creator => <li key={creator.name}>{creator.name}</li>)
  );

  return (
    <div>
      <h1>{title}</h1>
      <img src={`${thumbnailSplit.join('')}.${thumbnail.extension}`} alt="" srcSet="" />
      <ul>
        { creators.available > 0 ? displayCreatorsName() : '' }
      </ul>
    </div>
  );
};

ComicCard.propTypes = {
  thumbnail: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  creators: PropTypes.instanceOf(Object).isRequired,
};

export default ComicCard;
