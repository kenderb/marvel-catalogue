import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ComicCard = ({
  title, thumbnail, creators, id,
}) => {
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
      <Link to={`/comics/${id}`}> See more </Link>
    </div>
  );
};

ComicCard.propTypes = {
  thumbnail: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  creators: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.string.isRequired,
};

export default ComicCard;
