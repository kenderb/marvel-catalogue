import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComics, filterByCreator } from '../actions';
import FilterComics from '../components/FilterComics';
import HeroSelector from '../components/HeroSelector';
import { characters, listOfCreators } from '../common';
import { HeroWrapper } from '../components/styled/lib';

const ComicForm = ({ fetchComics, filterByCreator }) => {
  const [currentSelect, setCurrentSelect] = useState('iron man');
  const handleOnChnage = name => {
    fetchComics(name);
    setCurrentSelect(name);
  };
  const handleOnChnageSelect = e => {
    filterByCreator(e.target.value);
  };

  return (
    <>
      <HeroWrapper>
        {characters.map(character => (
          <HeroSelector
            key={character.id}
            onClickHandler={handleOnChnage}
            image={character.image}
            heroName={character.name}
            selected={currentSelect}
          />
        ))}
      </HeroWrapper>
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
