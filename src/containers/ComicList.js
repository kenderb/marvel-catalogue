import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComics } from '../actions';
import ComicCard from '../components/ComicCard';

const CharacterList = ({ comics, fetchComics }) => {
  useEffect(() => {
    fetchComics();
  }, [fetchComics]);

  console.log('from the CharacterLists', comics);

  if (comics.length > 0) {
    return (
      <div>
        {comics.map(comic => (
          <ComicCard
            title={comic.title}
            thumbnail={comic.thumbnail}
            format={comic.format}
            key={comic.id}
            creators={comic.creators}
          />
        ))}
      </div>
    );
  }

  return <div>list</div>;
};

CharacterList.propTypes = {

  comics: PropTypes.instanceOf(Array).isRequired,
  fetchComics: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({ comics: state.comics });

export default connect(mapStateToProps, { fetchComics })(CharacterList);
