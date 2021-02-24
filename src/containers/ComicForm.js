import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComics, filterByCreator } from '../actions';
import FilterComics from '../components/FilterComics';
import HeroSelector from '../components/HeroSelector';
import { characters, listOfCreators } from '../common';
import { HeroWrapper } from '../components/styled/lib';

const ComicForm = ({ filter, fetchComics, filterByCreator }) => {
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
        currentFilter={filter}
      />
    </>
  );
};

ComicForm.propTypes = {
  fetchComics: PropTypes.func.isRequired,
  filterByCreator: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps, { fetchComics, filterByCreator })(ComicForm);
