import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComics } from '../actions';
import ComicCard from '../components/ComicCard';

const CharacterList = ({ filter, comics, fetchComics }) => {
  useEffect(() => {
    fetchComics();
  }, [fetchComics]);

  const displayComics = () => comics.map(comic => {
    const arrayOfUsers = comic.creators.items.map(name => name.name);
    if (arrayOfUsers.includes(filter) || filter === 'All') {
      return (
        <ComicCard
          title={comic.title}
          thumbnail={comic.thumbnail}
          format={comic.format}
          key={comic.id}
          creators={comic.creators}
          id={comic.id}
        />
      );
    }
    return null;
  });
  if (comics.length > 0) {
    return (
      <div>
        {filter}
        {displayComics()}
      </div>
    );
  }
  return (
    <h1>loading...</h1>
  );
};

CharacterList.propTypes = {
  comics: PropTypes.instanceOf(Array).isRequired,
  fetchComics: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ comics: state.comics, filter: state.filter });

export default connect(mapStateToProps, { fetchComics })(CharacterList);
