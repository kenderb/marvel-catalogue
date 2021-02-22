import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComics, filterByCreator } from '../actions';
import ComicCard from '../components/ComicCard';

const CharacterList = ({
  filter, comics, fetchComics, filterByCreator,
  loading, error,
}) => {
  useEffect(() => {
    fetchComics();
    filterByCreator('All');
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

  if (!loading) return displayComics();
  if (error) return <h1>ERROR</h1>;
  return (
    <h1>loading...</h1>
  );
};

CharacterList.propTypes = {
  comics: PropTypes.instanceOf(Object).isRequired,
  fetchComics: PropTypes.func.isRequired,
  filterByCreator: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.comics.loading,
  comics: state.comics.data,
  error: state.comics.error,
  filter: state.filter,
});

export default connect(mapStateToProps, { fetchComics, filterByCreator })(CharacterList);
