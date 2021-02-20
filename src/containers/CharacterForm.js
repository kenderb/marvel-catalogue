import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';

const CharacterForm = ({ fetchCharacters }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSumit = e => {
    e.preventDefault();
    fetchCharacters(inputValue);
    e.target.reset();
  };
  const handleOnChnage = e => {
    setInputValue(e.target.value);
  };
  return (
    <form onSubmit={e => handleSumit(e)}>
      <input type="text" value={inputValue} onChange={e => handleOnChnage(e)} />
      <button type="submit">Submit</button>
    </form>
  );
};

CharacterForm.propTypes = {
  fetchCharacters: PropTypes.func.isRequired,
};

export default connect(null, { fetchCharacters })(CharacterForm);
