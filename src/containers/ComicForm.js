import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComics, filterByCreator } from '../actions';
import FilterComics from '../components/FilterComics';
import HeroSelector from '../components/HeroSelector';
import { listOfCreators, characters } from '../common';

const ComicForm = ({ fetchComics, filterByCreator }) => {
  const handleOnChnage = name => {
    fetchComics(name);
  };

  const handleOnChnageSelect = e => {
    filterByCreator(e.target.value);
  };

  return (
    <>
      {characters.map(character => (
        <HeroSelector
          key={character.id}
          onClickHandler={handleOnChnage}
          image={character.image}
          heroName={character.name}
        />
      ))}
      <FilterComics
        cretorList={listOfCreators}
        onChangeSelect={handleOnChnageSelect}
      />
    </>
  );
};

ComicForm.propTypes = {
  fetchComics: PropTypes.func.isRequired,
  filterByCreator: PropTypes.func.isRequired,
};

export default connect(null, { fetchComics, filterByCreator })(ComicForm);
