import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComics, filterByCreator } from '../actions';

const listOfCreators = [
  'Federico Blee',
  'Sebastian Carrillo',
  'John Tyler Christopher',
  'Christina Harrington',
  'Vc Cory Petit',
  'Mariko Tamaki',
  'Tom Brevoort',
  'C Cafu',
  'Christopher Cantwell',
  'Vc Joe Caramagna',
  "Frank D'ARMATA",
  'Alex Ross',
  'Henry Abrams',
  'J.J Abrams',
  'Olivier Coipel',
  'Nick Lowe',
  'Sara Pichelli',
  'Dave Stewart',
];

const ComicForm = ({ fetchComics, filterByCreator }) => {
  const [inputValue, setInputValue] = useState('');
  const selectRef = useRef(null);

  const handleSumit = e => {
    e.preventDefault();
    fetchComics(inputValue);
    filterByCreator(selectRef.current.value);
  };

  const handleOnChnage = e => {
    setInputValue(e.target.value);
  };

  const handleOnChnageSelect = e => {
    filterByCreator(e.target.value);
  };

  return (
    <form onSubmit={e => handleSumit(e)}>

      <input type="text" value={inputValue} onChange={e => handleOnChnage(e)} required />

      <button type="submit">Submit</button>

      <select onChange={e => handleOnChnageSelect(e)} ref={selectRef}>

        {['All', ...listOfCreators].map(creator => (
          <option value={creator} key={creator}>{creator}</option>
        ))}
      </select>

    </form>
  );
};

ComicForm.propTypes = {
  fetchComics: PropTypes.func.isRequired,
  filterByCreator: PropTypes.func.isRequired,
};

export default connect(null, { fetchComics, filterByCreator })(ComicForm);
