import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComics, filterByCreator } from '../actions';

import HeroSelector from '../components/HeroSelector';
import { characters } from '../common';
import { HeroWrapper } from '../components/styled/lib';

const ComicForm = ({ fetchComics }) => {
  const [currentSelect, setCurrentSelect] = useState('iron man');
  const handleOnChnage = name => {
    fetchComics(name);
    setCurrentSelect(name);
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
    </>
  );
};

ComicForm.propTypes = {
  fetchComics: PropTypes.func.isRequired,

};

export default connect(null, { fetchComics, filterByCreator })(ComicForm);
