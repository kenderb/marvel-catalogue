import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ComicCardWrapper } from './styled/lib';

const ComicCard = ({
  title, thumbnail, creators, id,
}) => {
  const thumbnailSplit = thumbnail.path.split('//');
  thumbnailSplit[0] = 'https://';

  const displayCreatorsName = () => (
    creators.items.map(creator => (
      <span key={creator.name}>
        {creator.name}
        ,
        {' '}
      </span>
    )));

  return (
    <ComicCardWrapper>
      <h2>{title}</h2>
      <img src={`${thumbnailSplit.join('')}.${thumbnail.extension}`} alt="" srcSet="" />
      <div>
        { creators.available > 0 ? displayCreatorsName() : '' }
      </div>
      <Link to={`/comics/${id}`}> See more </Link>
    </ComicCardWrapper>
  );
};

ComicCard.propTypes = {
  thumbnail: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  creators: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.number.isRequired,
};

export default ComicCard;
